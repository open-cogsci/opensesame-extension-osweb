let context
let runner
let abortedByUser = false

/**
 * Is called on page load to launch the experiment
 */
function loadExperiment() {
    const params = jatos.componentJsonInput || {}

    let subject_nr = jatos.componentResultId

    if (jatos.urlQueryParameters && jatos.urlQueryParameters.subject_nr) {
        subject_nr = jatos.urlQueryParameters.subject_nr
    } else if (params.subject) {
    // Check if last character is a , or - and remove it.
        if (params.subject.endsWith(',') || params.subject.endsWith('-')) {
            params.subject = params.subject.slice(0,-1)
        }
        // Split the string over the ',' separator
        const splitted = params.subject.split(/\s*,\s*/)
        const possible_subject_nrs = []
        for (let item of splitted) {
            // Check if item specifies a range (i.e. 5-10)
            if (item.includes('-')) {
                const operands = item.split('-').map(no => parseInt(no))
                // Interpolate the range values, and make sure each value occurs only once in
                // the array of possible subject nrs
                for (let i = operands[0]; i <= operands[1]; i++) {
                    if (!possible_subject_nrs.includes(i)) {
                        possible_subject_nrs.push(i)
                    }
                }
            } else {
                // See if the current item is an integer, and throw an error if it isn't
                const curr_nr = parseInt(item)
                if (!Number.isInteger(curr_nr)) {
                    throw new Error('Invalid character among possible subject numbers')
                }
                // Only add the number if it isn't present yet
                if (!possible_subject_nrs.includes(curr_nr)) {
                    possible_subject_nrs.push(curr_nr)
                }
            }
        }
        // Random selection
        //subject_nr = possible_subject_nrs[Math.floor(Math.random() * possible_subject_nrs.length)];
        // Selection depending on jatos ID
        subject_nr = possible_subject_nrs[jatos.componentResultId % possible_subject_nrs.length]
        console.log('The used subject number is', subject_nr)
    }

    context = {
        // eslint-disable-next-line no-undef
        source: (new URL(osexpFile, window.location)).href,
        debug: false,
        subject: subject_nr,
        fullScreen: params.fullscreen || false,
        introClick: true, // Required to enable fullscreen mode (and circumvent browser security for doing so)
        introScreen: true,
        name: 'osweb',
        prompt: prompt,
        scaleMode: 'exactFit',
        target: null,
        confirm: onConfirmHandler,
        onLog: onLogHandler,
        onFinished: onFinishedHandler,
        onError: errorHandler
    }
    runner = osweb.getRunner('osweb_div')
    runner.run(context)
    // Open JSON data array
    send('[')
}

// Callback function to handle errors
// eslint-disable-next-line no-unused-vars
function errorHandler (msg, url, _line, _col, _error) {
    let text = '<p><b>' + msg + '</b></p>'
    if (url) {
        text += '<p>See ' + (url && url.includes('osdoc')
            ? '<a href="'+url+'" target="_BLANK">the OSWeb documentation</a>'
            : 'the console') + ' for further details</p>'
        alertify.errorAlert(text)
    }
    send(']')
}

/**
 * Callback function for processing log data
 * @param {Object} data - The result data.
 */
function onLogHandler(data) {
    if (data === null) {
        return
    }
    // Add Jatos parameters to this log entry
    if (jatos.componentJsonInput && jatos.componentJsonInput.omitJatosIds !== true) {
        jatos.addJatosIds(data)
    }

    send(JSON.stringify(data) + ',\n')
}

function send (data) {
    // Send this log entry to the server
    jatos.appendResultData(
        data,
        function(){return {}},
        function(err){
            console.error(err)
            jatos.log(err)
        }
    )
}

/** Callback function for processing after an experiment is finished.
 * @param {Object} data - The result data.
 * @param {Object} sessionData - The session data.
 */
function onFinishedHandler(data, context) {
    context.jatosVersion = jatos.version
    context.queryParams = jatos.urlQueryParameters
    if (abortedByUser) {
        jatos.endStudy({data, context}, false, 'Experiment aborted by user', true)
    } else {
        submitData({data, context}, true)
    }
}

function submitData(data, retryOnFailure = true) {
    let failFunc
    if (retryOnFailure) {
        failFunc = function () {
            alertify.set('notifier','position', 'top-center')
            alertify.notify(
                'Transferring your data to the server. Please wait',
                'success',                  // status
                3,                          // delay
                function(){                 // function to call after delay
                    submitData(data, false)
                }
            )
        }
    } else {
        failFunc = function() { jatos.endStudy('Failed to send data to server') }
    }

    jatos.submitResultData(
        {data, context},
        jatos.startNextComponent,
        failFunc
    )
}

/**
 * Function to handle confirm dialog messages from the runner.
 * @param {String} title - The title of the dialog box.
 * @param {String} message - The message qwithin the dialog box.
 * @param {Object} onConfirm - The confirm event.
 * @param {Object} onCancel - The cancel event.
 */
function onConfirmHandler(title, message, onConfirm, onCancel) {
    alertify.confirm(
        title,
        message,
        function () {
            onConfirm()
        },
        function () {
            abortedByUser = true
            onCancel()
        }.bind(this)
    ).showModal()
}

/**
 * Function to handle input prompt dialog messages from the runner.
 * @param {String} title - The title of the dialog box.
 * @param {String} message - The message qwithin the dialog box.
 * @param {String} defaultValue - The default value for the input field.
 * @param {String} dataType - The datatype to store.
 * @param {Object} onConfirm - The confirm event.
 * @param {Object} onCancel - The cancel event.
 */
function prompt(title, message, defaultValue, _, onConfirm, onCancel) {
    alertify.prompt(
        title,
        message,
        defaultValue,
        function (_, value) {
            onConfirm(value)
        },
        function () {
            onCancel()
        }.bind(this)
    ).showModal()
}

/**
 * Function to handle input prompt dialog messages from the runner.
 **/
// eslint-disable-next-line no-unused-vars
function onPageLoad() {
    // Starts the experiment when the page is fully loaded.
    window.onerror = errorHandler
    jatos.onError(errorHandler)
    jatos.onLoad(loadExperiment)
    if (!alertify.errorAlert) {
        //define a new errorAlert based on alert
        alertify.dialog('errorAlert', function factory() {
            return {
                build: function () {
                    var errorHeader = '<img src="img/warning.png"' +
                      'style="vertical-align:middle;color:#e10000"> ' +
                      'Application Error'
                    this.setHeader(errorHeader)
                }
            }
        }, true, 'alert')
    }
}
