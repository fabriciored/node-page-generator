"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.callFileSystem = void 0;
const fs_1 = __importDefault(require("fs"));
const callFileSystem = (path, content) => {
    fs_1.default.writeFile(`${path}`, `${content}`, function (err) {
        if (err)
            throw err;
        console.log('file created');
    });
};
exports.callFileSystem = callFileSystem;
//# sourceMappingURL=fileSystem.js.map