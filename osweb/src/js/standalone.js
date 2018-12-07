const context = {
    confirm: onConfirmHandler,
    debug: false,
    fullScreen: params.fullscreen,
    introClick: true,
    introScreen: true,
    mimetype: '',
    name: 'osweb',
    onFinished: onFinishedHandler,
    prompt: prompt,
    scaleMode: 'exactFit',
    source: null,
    subject: parseInt(params.subject),
    target: null
};

let runner = null;


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
