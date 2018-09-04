let context = {
    source: (new URL(osexpFile, window.location)).href,
    debug: false,
    subject: params.subject,
    fullScreen: params.fullscreen,
    introClick: false,
    introScreen: true,
    mimetype: '',
    name: 'osweb',
    prompt: null,
    scaleMode: 'exactFit',
    target: null,
    confirm: onConfirm,
    onLog: onLogHandler,
    onFinished: onFinishedHandler
};

let runner = null;
let errorsOccured = false;

/**
 * Is called on page load to launch the experiment
 */
function runExperiment() {
    runner = osweb.getRunner('osweb_div');
    runner.run(context);
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
    jatos.addJatosIds(data);

    // Send this log entry to the server
    jatos.appendResultData(
        JSON.stringify(data),
        () => {},
        () => {
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
    if (errorsOccured) {
        jatos.endStudy(false, 'Error occurred while sending: ' + JSON.stringify(data));
    } else {
        jatos.endStudy('Study completed successfully');
    }
    document.getElementById('osweb_div').style.display = 'none';
}

/** Callback function for handling Escape key presses
 */
function onConfirm() {
    jatos.endStudy(false, 'Experiment aborted');
    runner.exit();
}

jatos.onLoad(runExperiment);