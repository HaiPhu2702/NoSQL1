"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const mongoose_1 = __importDefault(require("mongoose"));
const contact_router_1 = __importDefault(require("./src/routes/contact.router"));
const port = 8080;
const app = (0, express_1.default)();
mongoose_1.default.connect("mongodb+srv://root:Password@nosql.1fyfr.mongodb.net/?retryWrites=true&w=majority").then(() => {
    console.log("connect success");
}).catch((error) => {
    throw error;
});
app.set("view engine", "ejs");
app.set('views', './src/views');
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use('/contact', contact_router_1.default);
app.listen(port, () => {
    console.log("http://localhost:" + port);
});
//# sourceMappingURL=index.js.map