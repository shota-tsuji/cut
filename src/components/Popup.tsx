import * as React from "react";

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
}

async function copyForMarkdown() {
    let queryOptions = { active: true, lastFocusedWindow: true };
    let [tab] = await chrome.tabs.query(queryOptions);
    const pageInfo = new PageInfo(tab);
    const text = `[${pageInfo.title}](${pageInfo.url})`;
    await navigator.clipboard.writeText(text);
}

export default function Popup() {
    return (
        <button onClick={copyForMarkdown}>Copy for Markdown</button>
    );
}

