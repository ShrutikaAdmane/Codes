"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class HeaderPageObject {
    constructor() {
        this.newQuoteLink = protractor_1.element(protractor_1.by.id('id_New'));
    }
}
exports.HeaderPageObject = HeaderPageObject;
