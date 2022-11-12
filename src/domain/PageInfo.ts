export type Format = "markdown" | "jira";

export default class PageInfo {
    url: string = '';
    title: string = '';

    constructor(url: string, title: string) {
        this.url = url;
        this.title = title;
    }

    getText(format: Format) {
        if (format === "markdown") {
            return`[${this.title}](${this.url})`;
        } else {
            return`[${this.title}|${this.url}]`;
        }
    }
}

