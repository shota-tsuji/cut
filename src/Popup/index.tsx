import * as React from "react";

async function popup() {
    let queryOptions = { active: true, lastFocusedWindow: true };
    let [tab] = await chrome.tabs.query(queryOptions);
    const text = `[${tab.title}](${tab.url})`;
    await navigator.clipboard.writeText(text);
}

export default function Popup() {
    return (
        <button onClick={popup}>copy as Markdown</button>
    );
}

