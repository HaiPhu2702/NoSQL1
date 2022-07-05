"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const multer_1 = __importDefault(require("multer"));
const product_model_1 = require("../schemas/product.model");
const upload = (0, multer_1.default)();
router.get('/create', upload.none(), async (req, res) => {
    res.render('createProduct');
});
router.post('/create', upload.none(), async (req, res) => {
    try {
        const newProduct = new product_model_1.Product(req.body);
        const product = await newProduct.save();
        if (product) {
            res.render('success');
        }
        else {
            res.render('error');
        }
    }
    catch (e) {
        res.render('error');
    }
});
router.get('/list', async (req, res) => {
    try {
        let limit;
        let offset;
        if (!req.query.limit || !req.query.offset) {
            limit = 3;
            offset = 0;
        }
        else {
            limit = +req.query.limit;
            offset = +req.query.offset;
        }
        const products = await product_model_1.Product.find().limit(3).skip(limit * offset);
        res.render('listProduct', { products: products });
    }
    catch (e) {
        res.render('error');
    }
});
exports.default = router;
//# sourceMappingURL=product.router.js.map