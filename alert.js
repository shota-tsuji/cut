async function popup() {
    let queryOptions = { active: true, lastFocusedWindow: true };
    let [tab] = await chrome.tabs.query(queryOptions);
    const text = `[${tab.title}](${tab.url})`;
    await navigator.clipboard.writeText(text);
}

document.getElementById("alertButton").addEventListener("click", popup);