export default class PageInfo {
    url: string = '';
    title: string = '';

    constructor(url: string, title: string) {
        this.url = url;
        this.title = title;
    }

    getMarkdownText() {
        return`[${this.title}](${this.url})`;
    }

    getJiraText() {
        return`[${this.title}|${this.url}]`;
    }
}

