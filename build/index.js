"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const generatePage_1 = require("./services/page/generatePage");
const downloadPage_1 = require("./services/page/downloadPage");
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
const router = express_1.default.Router();
app.use(express_1.default.json({
    type: '*/*'
}));
app.get('/', (request, response) => {
    response.sendStatus(200);
});
app.get('/download', (request, response) => {
    (0, downloadPage_1.downloadPage)(response);
});
router.post('/generate', function (request, response, fs) {
    const values = Object.values(request.body);
    (0, generatePage_1.generatePage)(request.body);
    console.log('created with values: ', values);
    response.sendStatus(200);
});
app.use('/', router);
app.listen(port);
console.log(`Server runs on port ${port}`);
//# sourceMappingURL=index.js.map