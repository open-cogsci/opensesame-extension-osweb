let context;
let runner;
let aborted = false;
let errorsOccured = false;

/**
 * Is called on page load to launch the experiment
 */
function loadExperiment() {
    const params = jatos.componentJsonInput || {};

    context = {
        source: (new URL(osexpFile, window.location)).href,
        debug: false,
        subject: (Number.isInteger(params.subject) && params.subject >= 0)
            ? params.subject
            : jatos.componentResultId,
        fullScreen: params.fullscreen || false,
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
    runner = osweb.getRunner('osweb_div');
    if (params.fullscreen) {
        showRunButton();
    } else {
        run();
    }
}

function showRunButton(){
    document.getElementById('run-button').style.display('block');
}

function run () {
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
    if( jatos.componentJsonInput && jatos.componentJsonInput.omitJatosIds !== true) {
        jatos.addJatosIds(data);
    }

    // Send this log entry to the server
    jatos.appendResultData(
        JSON.stringify(data),
        () => {},
        (err) => {
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
    if (aborted) {
        jatos.endStudy(false, 'Experiment aborted by user');
    } else if (errorsOccured) {
        jatos.endStudy(false, 'Errors occurred during the experiment');
    } else {
        jatos.endStudy('Study completed successfully');
    }
    document.getElementById('osweb_div').style.display = 'none';
}

/** Callback function for handling Escape key presses
 */
function onConfirm() {
    aborted = true;
    runner.exit();
}

jatos.onLoad(loadExperiment);