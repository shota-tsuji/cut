async function popup() {
    let queryOptions = { active: true, lastFocusedWindow: true };
    let [tab] = await chrome.tabs.query(queryOptions);
    const text = `[${tab.title}](${tab.url})`;
    await navigator.clipboard.writeText(text);
}

const button = document.getElementById("alertButton");
if (!!button) {
    button.addEventListener("click", popup);
}