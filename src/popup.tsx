import {CssBaseline} from "@mui/material";
import OutlinedCard from "./components/OutlinedCard";
import {IPageInfoRepository} from "./domain/IPageInfoRepository";
import ChromeTabRepository from "./infrastructure/ChromeTabRepository";
import {createRoot} from "react-dom/client";
import PageInfo from "./domain/PageInfo";
import * as React from "react";

class PopupService {
    private readonly html: HTMLElement | null;
    private readonly pageInfoRepository: IPageInfoRepository;

    constructor(repository: IPageInfoRepository) {
        this.html = document.getElementById("root");
        this.pageInfoRepository = repository;
    }

    async main() {
        const pageInfoDto = await this.pageInfoRepository.getPageInfo();
        const pageInfo = new PageInfo(pageInfoDto.url, pageInfoDto.title);
        const data = [
            {
                name: "Markdown",
                func: () => {
                    this.pageInfoRepository.savePageInfo(pageInfo, "markdown")
                }
            },
            {
                name: "Jira",
                func: () => {
                    this.pageInfoRepository.savePageInfo(pageInfo, "jira")
                }
            }];

        if (!!this.html) {
            const root = createRoot(this.html);
            root.render(
                <React.StrictMode>
                    <CssBaseline/>
                    <OutlinedCard buttonProps={data} cardTitle="Copy"/>
                </React.StrictMode>,
            );
        }
    }
}

const popupService = new PopupService(new ChromeTabRepository());
popupService.main();