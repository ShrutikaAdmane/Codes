"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
//import { FlightBookPageObject } from "../pages/FlightBook";
const FlightBook_1 = require("../pages/FlightBook");
const { When } = require("cucumber");
const FlightBookPageObject = new FlightBook_1.FlightBook();
When(/^I Select PartyType "(.*?)"$/, (partyType) => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.sleep(2000);
    yield FlightBookPageObject.partyTypeDropDown.sendKeys(partyType);
}));
When(/^I Select SearchType "(.*?)"$/, (searchType) => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.sleep(2000);
    yield FlightBookPageObject.searchTypeDropDown.click();
    yield protractor_1.browser.sleep(2000);
    const searchTypeDropDownOptionsXpath = "//li[@role=\'option\' and text()=\'" + searchType + "\']";
    const searchTypeDropDownOptions = protractor_1.element(protractor_1.by.xpath(searchTypeDropDownOptionsXpath));
    yield searchTypeDropDownOptions.click();
}));
