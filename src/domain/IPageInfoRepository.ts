import PageInfoDto from "./PageInfoDto";
import PageInfo, {Format} from "./PageInfo";

export interface IPageInfoRepository {
    getPageInfo(): Promise<PageInfoDto>;
    savePageInfo(pageInfo: PageInfo, format: Format): Promise<void>;
}