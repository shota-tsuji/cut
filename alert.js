async function showAlert() {
    let queryOptions = { active: true, lastFocusedWindow: true };
    let [tab] = await chrome.tabs.query(queryOptions);
    await navigator.clipboard.writeText(tab.url);
}

document.getElementById("alertButton").addEventListener("click", showAlert);