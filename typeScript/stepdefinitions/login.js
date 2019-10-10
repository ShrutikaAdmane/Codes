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
const loginPage_1 = require("../pages/loginPage");
const { When, Given } = require("cucumber");
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;
const login = new loginPage_1.LoginPageObject();
Given(/^I Am On Duck Creek Login Page$/, () => __awaiter(void 0, void 0, void 0, function* () {
    expect(protractor_1.browser.getTitle()).to.eventually.equal("Duck Creek Technologies");
}));
When(/^I Enter Username "(.*?)"$/, (username) => __awaiter(void 0, void 0, void 0, function* () {
    yield login.usernameTextBox.sendKeys(username);
}));
When(/^I Enter Password "(.*?)"$/, (password) => __awaiter(void 0, void 0, void 0, function* () {
    //var pass=AES.encrypt('encrypt it',password);
    //console.log("Password is encrypted"+pass);
    //var depass=AES.decrypt('decrypt it',password);
    //console.log("Password is decrypted"+depass);
    yield login.passwordTextBox.sendKeys(password);
}));
When(/^I Click On Login Button$/, () => __awaiter(void 0, void 0, void 0, function* () {
    yield login.loginButton.click();
}));
