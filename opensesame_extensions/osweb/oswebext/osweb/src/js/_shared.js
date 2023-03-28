function defineErrorAlert() {
    if (!alertify.errorAlert) {
        //define a new errorAlert base on alert
        alertify.dialog('errorAlert', function factory() {
            return {
                build: function () {
                    this.setHeader('Application Error')
                }
            }
        }, true, 'alert')
    }
}

// Callback function to handle errors
function errorHandler (event) {
    const current_item = runner._itemStack.pop()
    const item_name = current_item['item']
    const item = runner._experiment.items['_items'][item_name]
    const phase = current_item['phase']
    let error_msg = `<h1>${event.message}</h1>`
    if (item.type === 'inline_javascript') {
        error_msg += `<p>This error occurred on <b>line ${event.lineno}</b> in the <b>${phase}</b> phase of item <b>${item_name}</b>.</p>`
        // For inline_javascript items, we can actually get the code and 
        // highlight the offending line
        error_msg += '<pre>\n'
        const code = item.vars.get(`_${phase}`, null, false)
        let code_lines = code.split(/\r?\n/)
        const min_lineno = Math.max(0, event.lineno - 4)
        const max_lineno = Math.min(code_lines.length, event.lineno + 3)
        code_lines = code_lines.slice(min_lineno, max_lineno)
        let lineno = min_lineno
        for (const code_line of code_lines) {
            lineno += 1
            if (lineno === event.lineno) {
                error_msg += `${lineno} <span class="error-line">${code_line}\n</span>`
            } else {
                error_msg += `${lineno} ${code_line}\n`
            }
        }
        error_msg += '</pre>\n'
    } else {
        error_msg += `<p>This error occurred in the <b>${phase}</b> phase of item <b>${item_name}</b>.</p>`
        const script = runner._experiment._javascriptWorkspace.current_script
        if (script !== null) {
            error_msg += `<p>The script below caused the error. This script may be a conditional expression or be embedded in text.</p><pre>\n${script}</pre`
        }
    }
    alertify.errorAlert(error_msg)
}


/**
 * Function to handle input prompt dialog messages from the runner.
 * @param {String} title - The title of the dialog box.
 * @param {String} message - The message qwithin the dialog box.
 * @param {String} defaultValue - The default value for the input field.
 * @param {String} _
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
