const context = {
    confirm: onConfirmHandler,
    debug: false,
    fullScreen: params.fullscreen,
    introClick: true,
    introScreen: true,
    mimetype: '',
    name: 'osweb',
    onFinished: onFinishedHandler,
    onError: errorHandler,
    prompt: prompt,
    scaleMode: 'exactFit',
    source: null,
    subject: parseInt(params.subject),
    target: null
};

let runner = null;

if (!alertify.errorAlert) {
    //define a new errorAlert base on alert
    alertify.dialog('errorAlert', function factory() {
        return {
            build: function () {
                this.setHeader('Application Error');
            }
        };
    }, true, 'alert');
}

// Callback function to handle errors
function errorHandler (msg, url, line, col, error) {
    let text = '<b>' + msg + '</b><br>'
    text += 'See ' + (url && url.includes('osdoc') ? '<a href="'+url+'" target="_BLANK">this source</a>':'the console') + ' for further details';
    alertify.errorAlert(text);
}
window.onerror = errorHandler;

/**
 * Converts base-64-encoded data to a File object, which can be passed to
 * osweb as an experiment file
 **/
function URItoFile(uri) {
    let byteCharacters = atob(uri.split(',')[1]);
    let byteArrays = [];
    for (let offset = 0; offset < byteCharacters.length; offset += 512) {
        let slice = byteCharacters.slice(offset, offset + 512);
        let byteNumbers = new Array(slice.length);
        for (let i = 0; i < slice.length; i++) {
            byteNumbers[i] = slice.charCodeAt(i);
        }
        let byteArray = new Uint8Array(byteNumbers);
        byteArrays.push(byteArray);
    }
    let blob = new Blob(byteArrays);
    return new File([blob], 'osexp_src');
}

/**
 * Is called on page load to launch the experiment
 */
function runExperiment() {
    context.source = URItoFile(document.getElementById('osexp_src').src);
    runner = osweb.getRunner('osweb_div');
    runner.run(context);
}

/** Callback function for processing after an experiment is finished.
 * @param {Object} data - The result data.
 * @param {Object} sessionData - The session data.
 */
function onFinishedHandler(data, sessionData) {
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
