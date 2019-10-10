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
const headerPage_1 = require("../pages/headerPage");
const { When } = require("cucumber");
const header = new headerPage_1.HeaderPageObject();
When(/^I Click On New Quote Link$/, () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.sleep(2000);
    yield header.newQuoteLink.click();
}));
