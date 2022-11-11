import ChromeTabRepository from "../infrastructure/ChromeTabRepository";
import PageInfo from "./PageInfo";

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

export {copyForJira, copyForMarkdown};