"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.downloadPage = void 0;
const downloadPage = (response) => {
    const file = 'src/generated/index.html';
    response.download(file);
};
exports.downloadPage = downloadPage;
//# sourceMappingURL=downloadPage.js.map