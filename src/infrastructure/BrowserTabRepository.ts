import {IPageInfoRepository} from "../domain/IPageInfoRepository";
import PageInfo, {Format} from "../domain/PageInfo";
import browserApi from "./browserApi";

export default class BrowserTabRepository implements IPageInfoRepository {
    async getPageInfo(): Promise<PageInfo> {
        let queryOptions = {active: true, lastFocusedWindow: true};
        let [tab] = await browserApi.tabs.query(queryOptions);

        if (!tab.url || !tab.title) {
            return new PageInfo('', '');
        }

        return new PageInfo(tab.url, tab.title);
    };

    async savePageInfo(pageInfo: PageInfo, format: Format): Promise<void> {
        await navigator.clipboard.writeText(pageInfo.getText(format));
    }
}