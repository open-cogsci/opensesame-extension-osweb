let context
let runner
let abortedByUser = false


class TransferModal {
    constructor() {
        this.status = 'closed'
        this.modal = document.querySelector('#modal')
        this.iconTransfer = document.querySelector('#modal .icon .lds-ripple')
        this.iconWarning = document.querySelector('#modal .icon .error')
        this.title = document.querySelector('#modal .text .title')
        this.message = document.querySelector('#modal .text .message')
    }
    open(title, message='', mode='transfer') {
        if(this.status == 'open') this.close()
        this.status = 'open'
        this.modal.style.display = 'flex'
        this.title.textContent = title
        this.message.textContent = message
        if (mode == 'transfer') {
            this.iconTransfer.style.display = 'inline-block'
        } else if (mode == 'error'){
            this.iconWarning.style.display = 'inline-block'
        }
    }
    close() {
        this.status = 'closed'
        this.modal.style.display = 'none'
        this.title.textContent = ''
        this.message.textContent = ''
        this.iconTransfer.style.display = 'none'
        this.iconWarning.style.display = 'none'
    }
}


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
        console.log('subject_nr =', subject_nr)
    }

    context = {
        // eslint-disable-next-line no-undef
        source: (new URL(osexpFile, window.location)).href,
        debug: false,
        subject: subject_nr,
        fullScreen: params.fullscreen,
        fullBackgroundColor: params.fullBackgroundColor,
        introClick: params.introClick,
        introScreen: true,
        name: 'osweb',
        prompt: prompt,
        scaleMode: 'exactFit',
        target: null,
        confirm: onConfirmHandler,
        onLog: onLogHandler,
        onFinished: onFinishedHandler,
        onError: errorHandler,
        welcomeText: params.welcomeText
    }
    runner = osweb.getRunner('osweb_div')
    runner.run(context)
    // Open JSON data array
    send('[')
}

/**
 * Callback function for processing log data
 * @param {Object} data - The result data.
 */
function onLogHandler(data) {
    if (data === null) {
        return
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

/**
 * Returns a function to submit the data with. Since this function is a closure, it keeps track
 * of the number of retries that have taken place, and will automatically try to resend the data again
 * after a failure, up to the specified number of maximum attempts.
 *
 * @param {int} maxAttempts Maximum number of retries for sending the data.
 * @param {int} timeout The period to wait in milliseconds before the next retry.
 */
function submitFunc(maxAttempts = 3, timeout=3000) {
    if (maxAttempts < 1) {
        throw new Error('maxAttempts cannot be smaller than 1')
    }
    let attempt = 1
    const submit = function(data, onSuccess, onFail) {
        if( attempt <= maxAttempts ){
            console.log('Sending data; attempt ' + attempt.toString())
            jatos.submitResultData(
                data,
                onSuccess,
                () => setTimeout(function(){ submit(data, onSuccess, onFail)}, timeout)
            )
        } else {
            console.log('Maximum attempts reached. Data transfer failed.')
            onFail()
        }
        attempt += 1
    }
    return submit
}

/** Callback function for processing after an experiment is finished.
 * @param {Object} data - The result data.
 * @param {Object} sessionData - The session data.
 */
function onFinishedHandler(data, context) {
    context.jatosVersion = jatos.version
    context.jatosStudyResultId = jatos.studyResultId
    context.queryParams = jatos.urlQueryParameters

    const transferModal = new TransferModal()
    // Closure, so attempt counts are contained in the function.
    const submit = submitFunc()
    let onSuccess, onFail
    if (abortedByUser) {
        onSuccess = () => {
            transferModal.close()
            jatos.endStudy(false, 'Experiment aborted by user')
        }
        onFail = () => {
            transferModal.open('Failed to gracefully abort','You can close this browser tab or window.', 'error')
        }
        transferModal.open('Aborting experiment', 'Please wait a few moments.')
    } else {
        onSuccess = () => {
            transferModal.close()
            jatos.startNextComponent()
        }
        onFail = () => {
            transferModal.open('Errors occurred', 'Failed to transfer your data.', 'error')
            jatos.endStudy(false, 'Failed to transfer data.')
        }
        transferModal.open('Transferring you data','Please wait a few moments.')

    }
    submit({data, context}, onSuccess, onFail)
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
 **/
// eslint-disable-next-line no-unused-vars
function onPageLoad() {
    document.getElementById('osweb_loading').style.display = 'none'
    // Starts the experiment when the page is fully loaded.
    jatos.onLoad(loadExperiment)
    defineErrorAlert()
    window.addEventListener('error', errorHandler)
}
