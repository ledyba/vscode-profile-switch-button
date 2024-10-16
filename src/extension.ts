// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

let statusBar: vscode.StatusBarItem;
const COMMAND_NAME = 'workbench.profiles.actions.switchProfile';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  statusBar = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left, 1000000);
  statusBar.command = COMMAND_NAME;
	statusBar.text = 'Switch Profile';
  statusBar.show();
  context.subscriptions.push(statusBar);
}

// This method is called when your extension is deactivated
export function deactivate() {
  statusBar.hide();
}
