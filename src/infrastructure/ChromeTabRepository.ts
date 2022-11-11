import {IPageInfoRepository} from "../domain/IPageInfoRepository";
import PageInfoDto from "../domain/PageInfoDto";

export default class ChromeTabRepository implements IPageInfoRepository {
    async getPageInfo(): Promise<PageInfoDto> {
        let queryOptions = {active: true, lastFocusedWindow: true};
        let [tab] = await chrome.tabs.query(queryOptions);

        if (!tab.url || !tab.title) {
            return new PageInfoDto('', '');
        }

        return new PageInfoDto(tab.url, tab.title);
    };

}