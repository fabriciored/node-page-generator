"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fileSystem_1 = require("./fileSystem");
const fs_1 = __importDefault(require("fs"));
test('Returns writefile with correct parameters', () => {
    expect((0, fileSystem_1.callFileSystem)('../', '<html><html>')).toBe(fs_1.default.writeFile('../', '<html><html>', function (err) {
        if (err)
            throw err;
        console.log('file created');
    }));
});
//# sourceMappingURL=fileSystem.test.js.map