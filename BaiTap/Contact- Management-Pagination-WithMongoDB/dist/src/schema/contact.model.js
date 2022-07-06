"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.contact = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const contactSchema = new mongoose_1.default.Schema({
    name: String,
    address: String,
    email: String,
    phone: String
});
const contact = mongoose_1.default.model('contact', contactSchema);
exports.contact = contact;
//# sourceMappingURL=contact.model.js.map