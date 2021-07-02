import { commands, window, ExtensionContext } from 'vscode';
import { TestTreeViewDataProvider } from './TreeViewExample';

export function activate(context: ExtensionContext) {
    commands.registerCommand('vscode.test.hello', () => {
        window.showInformationMessage('Hello!');
    });

    window.registerTreeDataProvider('testTreeView', new TestTreeViewDataProvider());
}