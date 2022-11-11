import PageInfoDto from "./PageInfoDto";

export interface IPageInfoRepository {
    getPageInfo(): Promise<PageInfoDto>;
}