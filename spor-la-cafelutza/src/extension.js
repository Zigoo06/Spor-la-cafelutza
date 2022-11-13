const vscode = require("vscode");

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
  console.log(
    'Congratulations, your extension "spor-la-cafelutza" is now active!'
  );

  let disposable = vscode.commands.registerCommand(
    "spor-la-cafelutza.buna-dimineata",
    function () {
      vscode.window.showInformationMessage("Spor la cafelutza!");
    }
  );

  context.subscriptions.push(disposable);
}

function deactivate() {}

module.exports = {
  activate,
  deactivate,
};
