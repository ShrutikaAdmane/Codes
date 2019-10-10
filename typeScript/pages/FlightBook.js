"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class FlightBook {
    constructor() {
        this.partyTypeDropDown = protractor_1.element(protractor_1.by.xpath("//input[@fieldref='PartyClearanceInput.PartyType']"));
        this.searchTypeDropDown = protractor_1.element(protractor_1.by.xpath("//input[@fieldref='PartyClearanceInput.SearchType']"));
    }
}
exports.FlightBook = FlightBook;
