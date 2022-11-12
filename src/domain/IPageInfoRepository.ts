import PageInfo, {Format} from "./PageInfo";

export interface IPageInfoRepository {
    getPageInfo(): Promise<PageInfo>;

    savePageInfo(pageInfo: PageInfo, format: Format): Promise<void>;
}