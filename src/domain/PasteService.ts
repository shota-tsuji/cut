import ChromeTabRepository from "../infrastructure/ChromeTabRepository";
import PageInfo from "./PageInfo";

export default class PasteService {
    async copyForMarkdown() {
        const pageInfoRepository = new ChromeTabRepository();
        const pageInfoDto = await pageInfoRepository.getPageInfo()
        const pageInfo = new PageInfo(pageInfoDto.url, pageInfoDto.title);
        //await navigator.clipboard.writeText(pageInfo.getMarkdownText());
    }

    async copyForJira() {
        const pageInfoRepository = new ChromeTabRepository();
        const pageInfoDto = await pageInfoRepository.getPageInfo()
        const pageInfo = new PageInfo(pageInfoDto.url, pageInfoDto.title);
        //await navigator.clipboard.writeText(pageInfo.getJiraText());
    }
}
