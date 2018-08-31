let context = {
	debug: false,
	subject: params.subject,
	fullScreen: params.fullscreen,
	introClick: false,
	introScreen: true,
	mimetype: '',
	name: 'osweb',
	prompt: null,
	scaleMode: 'exactFit',
	source: null,
	target: null,
	confirm: onConfirm,
	onLog: onLogHandler,
	onFinished: onFinishedHandler
}

let taskData = ''
let runner = null
let errorsOccured = false
let errorMessage = ''

/**
 * Converts base-64-encoded data to a File object, which can be passed to
 * osweb as an experiment file
 **/
function URItoFile(uri) {
	let byteCharacters = atob(uri.split(',')[1])
	let byteArrays = []
	for (let offset = 0; offset < byteCharacters.length; offset += 512) {
		let slice = byteCharacters.slice(offset, offset + 512);
		let byteNumbers = new Array(slice.length)
		for (let i = 0; i < slice.length; i++) {
			byteNumbers[i] = slice.charCodeAt(i)
		}
		let byteArray = new Uint8Array(byteNumbers)
		byteArrays.push(byteArray)
	}
	let blob = new Blob(byteArrays)
	return new File([blob], "osexp_src")
}

/**
 * Is called on page load to launch the experiment
 */
function runExperiment() {
	context.source = URItoFile(document.getElementById('osexp_src').src)
	runner = osweb.getRunner('osweb_div')
	runner.run(context)
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
	jatos.addJatosIds(data)

	// Send this log entry to the server
	jatos.appendResultData(
		JSON.stringify(data),
		() => {},
		() => {
			// How to handle errors?
			errorsOccured = true
			errorMessage = 'Error occurred for ' + JSON.stringify(data)
		}
	)
}

/** Callback function for processing after an experiment is finished.
 * @param {Object} data - The result data.
 * @param {Object} sessionData - The session data.
 */
function onFinishedHandler(data, sessionData) {
	if (errorsOccured) {
		jatos.endStudy(false, 'Error occurred while sending: ' + JSON.stringify(data))
	} else {
		jatos.endStudy('Study completed successfully')
	}
	document.getElementById("osweb_div").style.display = "none"
}

/** Callback function for handling Escape key presses
 */
function onConfirm() {
	runner.exit()
}

jatos.onLoad(runExperiment)