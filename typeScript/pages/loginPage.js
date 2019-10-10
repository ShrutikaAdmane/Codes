"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class LoginPageObject {
    constructor() {
        this.usernameTextBox = protractor_1.element(protractor_1.by.id('username-inputEl'));
        this.passwordTextBox = protractor_1.element(protractor_1.by.id('password-inputEl'));
        this.loginButton = protractor_1.element(protractor_1.by.xpath('//a[@name=\'home\']/span'));
    }
}
exports.LoginPageObject = LoginPageObject;
