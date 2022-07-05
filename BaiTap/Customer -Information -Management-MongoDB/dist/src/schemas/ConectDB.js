"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
let DB_url = 'mongodb+srv://root:Password@nosql.1fyfr.mongodb.net/?retryWrites=true&w=majority';
exports.default = mongoose_1.default.connect(DB_url)
    .then(() => {
    console.log("connect success");
})
    .catch(err => {
    console.log(err.message);
});
//# sourceMappingURL=ConectDB.js.map