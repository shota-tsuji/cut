export type Format = "markdown" | "jira" | "plain text";

export default class PageInfo {
    private readonly url: string = '';
    private readonly title: string = '';

    constructor(url: string, title: string) {
        this.url = url;
        this.title = title;
    }

    getText(format: Format) {
        if (format === "markdown") {
            return`[${this.title}](${this.url})`;
        } else if (format === "jira") {
            return`[${this.title}|${this.url}]`;
        } else if (format === "plain text") {
            return`${this.title}\n${this.url}`;
        } else {
            return "copy failed.";
        }
    }
}

