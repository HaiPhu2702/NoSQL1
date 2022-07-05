"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const mongoose_1 = __importDefault(require("mongoose"));
const book_router_1 = __importDefault(require("./src/router/book.router"));
const port = 8080;
const app = (0, express_1.default)();
app.set('view engine', 'ejs');
app.set('views', './src/views');
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: false }));
const DB_URL = 'mongodb+srv://root:Password@nosql.1fyfr.mongodb.net/?retryWrites=true&w=majority';
mongoose_1.default.connect(DB_URL)
    .then(() => {
    console.log("connect success");
})
    .catch((error) => {
    console.log('errrr' + error.message);
});
app.use('/book', book_router_1.default);
app.listen(port, () => {
    console.log("http://localhost:" + port);
});
//# sourceMappingURL=index.js.map