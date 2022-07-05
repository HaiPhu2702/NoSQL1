"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const ConectDB_1 = __importDefault(require("./src/schemas/ConectDB"));
const user_router_1 = __importDefault(require("./src/routes/user.router"));
const port = 8080;
ConectDB_1.default;
const app = (0, express_1.default)();
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.set('view engine', 'ejs');
app.set('views', "./src/views");
app.use('/user', user_router_1.default);
app.listen(port, () => {
    console.log("http://localhost:" + port);
});
//# sourceMappingURL=index.js.map