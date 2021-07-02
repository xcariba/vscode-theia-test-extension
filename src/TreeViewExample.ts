import { CancellationToken, Command, Event, ProviderResult, TreeDataProvider, TreeItem, TreeItemCollapsibleState } from "vscode";

export class TestTreeViewDataProvider implements TreeDataProvider<ITestTreeItem> {

    private readonly model: ITestTreeItem;

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

   
    getTreeItem(element: ITestTreeItem): TreeItem | Thenable<TreeItem> {
        return {
            label: element.name,
            collapsibleState: element.children.length > 0 ? TreeItemCollapsibleState.Collapsed : TreeItemCollapsibleState.None,
            command: this.getCommand(element)
        }
    }
    
    getChildren(element?: ITestTreeItem): ProviderResult<ITestTreeItem[]> {
        if (!element) {
            return [this.model];
        }
        return element.children;
    }

    getCommand(element: ITestTreeItem): Command | undefined {
        if (element.hasCommand) {
            return {
                command: 'vscode.test.hello',
                title: 'Hello'
            };
        }
        return undefined;
    }
    
}

interface ITestTreeItem {
    name: string,
    hasCommand: boolean;
    children: ITestTreeItem[]
}