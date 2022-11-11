import * as React from "react";
import { createRoot } from "react-dom/client";
import Popup from "./components/Popup";
import './popup.css';
import PageInfo from "./domain/PageInfo";
import ChromeTabRepository from "./infrastructure/ChromeTabRepository";

async function copyForMarkdown() {
    const pageInfoRepository = new ChromeTabRepository();
    const pageInfoDto = await pageInfoRepository.getPageInfo()
    const pageInfo = new PageInfo(pageInfoDto.url, pageInfoDto.title);
    await navigator.clipboard.writeText(pageInfo.getMarkdownText());
}

async function copyForJira() {
    const pageInfoRepository = new ChromeTabRepository();
    const pageInfoDto = await pageInfoRepository.getPageInfo()
    const pageInfo = new PageInfo(pageInfoDto.url, pageInfoDto.title);
    await navigator.clipboard.writeText(pageInfo.getJiraText());
}

class PopupService  {
    private readonly html: HTMLElement | null;

    constructor() {
        this.html = document.getElementById("root");
    }

    main() {
        if (!!this.html) {
            const root = createRoot(this.html);
            root.render(
                <React.StrictMode>
                    <Popup name="Copy for Markdown" func={copyForMarkdown}/>
                    <Popup name="Copy for Jira" func={copyForJira}/>
                </React.StrictMode>,
            );
        }
    }
}

const popupService = new PopupService();
popupService.main();