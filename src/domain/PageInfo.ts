export default class PageInfo {
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

    getJiraText() {
        return`[${this.title}|${this.url}]`;
    }
}

