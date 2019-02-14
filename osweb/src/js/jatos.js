let context;
let runner;
let abortedByUser = false;
let errorsOccured = false;

/**
 * Is called on page load to launch the experiment
 */
function loadExperiment() {
    const params = jatos.componentJsonInput || {};

    let subject_nr = jatos.componentResultId;

    if (params.subject) {
        // Check if last character is a , or - and remove it.
        if (params.subject.endsWith(',') || params.subject.endsWith('-')) {
            params.subject = params.subject.slice(0,-1);
        }
        // Split the string over the ',' separator
        const splitted = params.subject.split(/\s*,\s*/);
        const possible_subject_nrs = [];
        for (let item of splitted) {
            // Check if item specifies a range (i.e. 5-10)
            if (item.includes('-')) {
                const operands = item.split('-').map(no => parseInt(no));
                // Interpolate the range values, and make sure each value occurs only once in
                // the array of possible subject nrs
                for (let i = operands[0]; i <= operands[1]; i++) {
                    if (!possible_subject_nrs.includes(i)) {
                        possible_subject_nrs.push(i);
                    }
                }
            } else {
                // See if the current item is an integer, and throw an error if it isn't
                const curr_nr = parseInt(item);
                if (!Number.isInteger(curr_nr)) {
                    throw new Error('Invalid character among possible subject numbers');
                }
                // Only add the number if it isn't present yet
                if (!possible_subject_nrs.includes(curr_nr)) {
                    possible_subject_nrs.push(curr_nr);
                }
            }
        }
        // Random selection
        //subject_nr = possible_subject_nrs[Math.floor(Math.random() * possible_subject_nrs.length)];
        // Selection depending on jatos ID
        subject_nr = possible_subject_nrs[jatos.componentResultId % possible_subject_nrs.length];
        console.log('The used subject number is', subject_nr);
    }

    context = {
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
    };
    runner = osweb.getRunner('osweb_div');
    runner.run(context);
    // Open JSON data array
    send('[');
}

// Callback function to handle errors
function errorHandler (msg, url, line, col, error) {
    let text = '<p><b>' + msg + '</b></p>';
    text += '<p>See ' + (url && url.includes('osdoc')
        ? '<a href="'+url+'" target="_BLANK">the OSWeb documentation</a>'
        : 'the console') + ' for further details</p>';
    alertify.errorAlert(text);
}

/**
 * Callback function for processing log data
 * @param {Object} data - The result data.
 */
function onLogHandler(data) {
    if (data === null) {
        return;
    }
    // Add Jatos parameters to this log entry
    if (jatos.componentJsonInput && jatos.componentJsonInput.omitJatosIds !== true) {
        jatos.addJatosIds(data);
    }

    send(JSON.stringify(data) + ',\n');
}

function send (data) {
    // Send this log entry to the server
    jatos.appendResultData(
        data,
        function(){return {};},
        function(err){
            console.error(err);
            // How to handle errors?
            errorsOccured = true;
        }
    );
}

/** Callback function for processing after an experiment is finished.
 * @param {Object} data - The result data.
 * @param {Object} sessionData - The session data.
 */
function onFinishedHandler(data, sessionData) {
    // Close JSON data array
    send(JSON.stringify(sessionData) + ']');
    if (abortedByUser) {
        jatos.endStudy(false, 'Experiment aborted by user');
    } else if (errorsOccured) {
        jatos.endStudy(false, 'Errors occurred during the experiment');
    } else {
        jatos.endStudy('Study completed successfully');
    }
    document.getElementById('osweb_div').style.display = 'none';
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
            onConfirm();
        },
        function () {
            abortedByUser = true;
            onCancel();
        }.bind(this)
    ).showModal();
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
function prompt(title, message, defaultValue, dataType, onConfirm, onCancel) {
    alertify.prompt(
        title,
        message,
        defaultValue,
        function (evt, value) {
            onConfirm(value);
        },
        function () {
            onCancel();
        }.bind(this)
    ).showModal();
}

/**
 * Function to handle input prompt dialog messages from the runner.
 **/
function onPageLoad() {
  // Starts the experiment when the page is fully loaded.
  window.onerror = errorHandler;
  jatos.onLoad(loadExperiment);
  if (!alertify.errorAlert) {
      //define a new errorAlert base on alert
      alertify.dialog('errorAlert', function factory() {
          return {
              build: function () {
                  var errorHeader = '<img src="img/warning.png"' +
                      'style="vertical-align:middle;color:#e10000"> ' +
                      'Application Error';
                  this.setHeader(errorHeader);
              }
          };
      }, true, 'alert');
  }
}
