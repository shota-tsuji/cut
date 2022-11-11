import * as React from "react";
import { createRoot } from "react-dom/client";
import Popup from "./components/Popup";
import './popup.css';
import {copyForJira, copyForMarkdown} from "./domain/PasteService";

class PopupService  {
    private readonly html: HTMLElement | null;

    constructor() {
        this.html = document.getElementById("root");
    }

    main() {
        if (!!this.html) {
            const root = createRoot(this.html);
            root.render(
                <React.StrictMode>
                    <Popup name="Copy for Markdown" func={copyForMarkdown}/>
                    <Popup name="Copy for Jira" func={copyForJira}/>
                </React.StrictMode>,
            );
        }
    }
}

const popupService = new PopupService();
popupService.main();