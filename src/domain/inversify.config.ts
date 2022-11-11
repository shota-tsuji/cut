import {Container} from "inversify";
import {IPageInfoRepository} from "./IPageInfoRepository";
import TYPES from "./Types";
import ChromeTabRepository from "../infrastructure/ChromeTabRepository";
import "reflect-metadata";

const container = new Container();
container.bind<IPageInfoRepository>(TYPES.IPageInfoRepository).to(ChromeTabRepository);

export default container;