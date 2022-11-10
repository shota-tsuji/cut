import * as React from "react";
import { createRoot } from "react-dom/client";
import Popup from "./components/Popup";
import './popup.css';

class PageInfo {
    url: string = '';
    title: string = '';

    constructor(tab: chrome.tabs.Tab) {
        if (!!tab.url) {
            this.url = tab.url;
        }
        if (!!tab.title) {
            this.title = tab.title;
        }
    }

    getMarkdownText() {
        return`[${this.title}](${this.url})`;
    }
}

async function copyForMarkdown() {
    let queryOptions = { active: true, lastFocusedWindow: true };
    let [tab] = await chrome.tabs.query(queryOptions);
    const pageInfo = new PageInfo(tab);
    await navigator.clipboard.writeText(pageInfo.getMarkdownText());
}

const container = document.getElementById("root");
if (!!container) {
    const root = createRoot(container);
    root.render(
        <React.StrictMode>
            <Popup name="Copy for Markdown" func={copyForMarkdown}/>
            <Popup name="Copy for hogehoge" func={copyForMarkdown}/>
        </React.StrictMode>,
    );
}