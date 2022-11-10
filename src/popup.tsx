import * as React from "react";
import { createRoot } from "react-dom/client";
import Popup from "./components/Popup";
import './popup.css';
import PageInfo from "./domain/PageInfo";

async function copyForMarkdown() {
    let queryOptions = { active: true, lastFocusedWindow: true };
    let [tab] = await chrome.tabs.query(queryOptions);
    const pageInfo = new PageInfo(tab);
    await navigator.clipboard.writeText(pageInfo.getMarkdownText());
}

async function copyForJira() {
    let queryOptions = { active: true, lastFocusedWindow: true };
    let [tab] = await chrome.tabs.query(queryOptions);
    const pageInfo = new PageInfo(tab);
    await navigator.clipboard.writeText(pageInfo.getJiraText());
}

const container = document.getElementById("root");
if (!!container) {
    const root = createRoot(container);
    root.render(
        <React.StrictMode>
            <Popup name="Copy for Markdown" func={copyForMarkdown}/>
            <Popup name="Copy for Jira" func={copyForJira}/>
        </React.StrictMode>,
    );
}