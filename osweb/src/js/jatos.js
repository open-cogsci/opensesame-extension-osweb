let context;
let runner;
let abortedByUser = false;
let errorsOccured = false;

/**
 * Is called on page load to launch the experiment
 */
function loadExperiment() {
    const params = jatos.componentJsonInput || {};

    let subject_nr = jatos.componentResultId
    if (params.subject) {
        const poss_nrs = params.subject.split(/\s*,\s*/)
        subject_nr = poss_nrs[Math.floor(Math.random() * poss_nrs.length)]
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
        onFinished: onFinishedHandler
    };
    runner = osweb.getRunner('osweb_div');
    runner.run(context);
    // Open JSON data array
    send('[');
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
    send('{}]');
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

jatos.onLoad(loadExperiment);

const onLoaded = function ( fn ) {

    // Sanity check
    if ( typeof fn !== 'function' ) return;

    // If document is already loaded, run method
    if ( document.readyState === 'complete'  ) {
        return fn();
    }

    // Otherwise, wait until document is loaded
    document.addEventListener( 'DOMContentLoaded', fn, false );

};

// Execute the code below after the page has been loaded.
onLoaded(function() {
    // Set position of notifications
    alertify.set('notifier', 'position', 'bottom-right');

    // Extend existing 'alert' dialog
    if (!alertify.errorAlert) {
        //define a new errorAlert base on alert
        alertify.dialog('errorAlert', function factory() {
            return {
                build: function () {
                    var errorHeader = '<span class="fa fa-times-circle fa-2x" ' +
							'style="vertical-align:middle;color:#e10000;">' +
							'</span> Application Error';
                    this.setHeader(errorHeader);
                }
            };
        }, true, 'alert');
    }

    // Set event callback for handling error messages using alertify.
    window.onerror = function (msg, url, line, col, error) {
        var text = '<p><b>' + msg + '</b></p>' + '<p>See console for further details</p>';
        alertify.errorAlert(text);
    };
});