"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.activate = void 0;
const vscode_1 = require("vscode");
const TreeViewExample_1 = require("./TreeViewExample");
function activate(context) {
    vscode_1.commands.registerCommand('vscode.test.hello', () => {
        vscode_1.window.showInformationMessage('Hello!');
    });
    vscode_1.window.registerTreeDataProvider('testTreeView', new TreeViewExample_1.TestTreeViewDataProvider());
}
exports.activate = activate;
//# sourceMappingURL=extension.js.map