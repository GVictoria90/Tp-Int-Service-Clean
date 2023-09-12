"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createID = exports.readParse = void 0;
const fs = require("fs");
const path_1 = require("path");
function readParse() {
    const dataService = (0, path_1.join)(__dirname, '../../data/services.json');
    const fileContent = fs.readFileSync(dataService, 'utf-8');
    console.log(fileContent);
    return JSON.parse(fileContent);
}
exports.readParse = readParse;
function createID() {
    const dataService = readParse();
    const lastServiceClean = dataService[dataService.length - 1];
    const id = lastServiceClean.id + 1;
    return id;
}
exports.createID = createID;
//# sourceMappingURL=utils.js.map