import * as React from "react";
import { createRoot } from "react-dom/client";
import Popup from "./components/Popup";
import './popup.css';
import PasteService from "./domain/PasteService";

class PopupService  {
    private readonly html: HTMLElement | null;
    private readonly pasteService: PasteService;

    constructor() {
        this.html = document.getElementById("root");
        this.pasteService = new PasteService();
    }

    main() {
        if (!!this.html) {
            const root = createRoot(this.html);
            root.render(
                <React.StrictMode>
                    <Popup name="Copy for Markdown" func={this.pasteService.copyForMarkdown}/>
                    <Popup name="Copy for Jira" func={this.pasteService.copyForJira}/>
                </React.StrictMode>,
            );
        }
    }
}

const popupService = new PopupService();
popupService.main();