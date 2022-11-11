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

const container = document.getElementById("root");
if (!!container) {
    const root = createRoot(container);
    root.render(
        <React.StrictMode>
            <Popup name="Copy for Markdown" func={copyForMarkdown}/>
            <Popup name="Copy for Jira" func={copyForJira}/>
        </React.StrictMode>,
    );
}