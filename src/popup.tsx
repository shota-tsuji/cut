import {createTheme, CssBaseline, ThemeProvider} from "@mui/material";
import OutlinedCard from "./components/OutlinedCard";
import {IPageInfoRepository} from "./domain/IPageInfoRepository";
import ChromeTabRepository from "./infrastructure/ChromeTabRepository";
import {createRoot} from "react-dom/client";
import {Format} from "./domain/PageInfo";
import * as React from "react";

class PopupService {
    private readonly html: HTMLElement | null;
    private readonly pageInfoRepository: IPageInfoRepository;

    constructor(repository: IPageInfoRepository) {
        this.html = document.getElementById("root");
        this.pageInfoRepository = repository;
    }

    async main() {
        const pageInfo = await this.pageInfoRepository.getPageInfo();
        const formats: Format[] = ["markdown", "jira", "plain text"];
        const data = formats.map(format => {
            return {
                name: format,
                func: () => {
                    this.pageInfoRepository.savePageInfo(pageInfo, format)
                }
            };
        });

        const darkTheme = createTheme({
            palette: {
                mode: "dark"
            },
        });

        if (!!this.html) {
            const root = createRoot(this.html);
            root.render(
                <React.StrictMode>
                    <ThemeProvider theme={darkTheme}>
                        <CssBaseline/>
                        <OutlinedCard buttonProps={data} cardTitle="Copy"/>
                    </ThemeProvider>
                </React.StrictMode>
            );
        }
    }
}

const popupService = new PopupService(new ChromeTabRepository());
void popupService.main();
