import * as React from "react";

async function copyForMarkdown() {
    let queryOptions = { active: true, lastFocusedWindow: true };
    let [tab] = await chrome.tabs.query(queryOptions);
    const text = `[${tab.title}](${tab.url})`;
    await navigator.clipboard.writeText(text);
}

export default function Popup() {
    return (
        <button onClick={copyForMarkdown}>Copy for Markdown</button>
    );
}

