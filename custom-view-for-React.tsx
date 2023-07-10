import { ItemView, WorkspaceLeaf } from "obsidian";
import * as React from "react";
//import * as ReactDOM from "react-dom";
import { ReactView } from "./ReactView";
import { createRoot, Root } from "react-dom/client";


export const VIEW_TYPE_EXAMPLE = "example-view";

export class ExampleView extends ItemView {
  myRoot: Root | undefined;

  constructor(leaf: WorkspaceLeaf) {
    super(leaf);
  }

  getViewType() {
    return VIEW_TYPE_EXAMPLE;
  }

  getDisplayText() {
    return "Example view";
  }

  async onOpen() {

    this.myRoot = createRoot(this.containerEl.children[1]); // intercourse between React and Obsidian APIs
    this.myRoot.render(<ReactView />);

  }

  async onClose() {
    this.myRoot?.unmount()
  }
}