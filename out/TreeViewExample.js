"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestTreeViewDataProvider = void 0;
const vscode_1 = require("vscode");
class TestTreeViewDataProvider {
    constructor() {
        this.model = {
            name: 'Root',
            hasCommand: false,
            children: [
                {
                    name: 'Collapsable Item Without Command',
                    hasCommand: false,
                    children: [
                        {
                            name: 'Item With Command',
                            hasCommand: true,
                            children: []
                        },
                        {
                            name: 'Item Without Command',
                            hasCommand: false,
                            children: []
                        }
                    ]
                },
                {
                    name: 'Collapsable Item With Command',
                    hasCommand: true,
                    children: [
                        {
                            name: 'Item With Command',
                            hasCommand: true,
                            children: []
                        },
                        {
                            name: 'Item Without Command',
                            hasCommand: false,
                            children: []
                        }
                    ]
                }
            ]
        };
    }
    getTreeItem(element) {
        return {
            label: element.name,
            collapsibleState: element.children.length > 0 ? vscode_1.TreeItemCollapsibleState.Collapsed : vscode_1.TreeItemCollapsibleState.None,
            command: this.getCommand(element)
        };
    }
    getChildren(element) {
        if (!element) {
            return [this.model];
        }
        return element.children;
    }
    getCommand(element) {
        if (element.hasCommand) {
            return {
                command: 'vscode.test.hello',
                title: 'Hello'
            };
        }
        return undefined;
    }
}
exports.TestTreeViewDataProvider = TestTreeViewDataProvider;
//# sourceMappingURL=TreeViewExample.js.map