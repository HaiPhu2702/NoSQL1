"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const book_model_1 = require("../schemas/book.model");
const multer_1 = __importDefault(require("multer"));
const upload = (0, multer_1.default)();
router.get('/create', (req, res) => {
    res.render('createBook');
});
router.post('/create', upload.none(), async (req, res) => {
    try {
        const newBook = new book_model_1.Book(req.body);
        const book = await newBook.save();
        if (book) {
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
router.get('/update/:id', async (req, res) => {
    try {
        const findBook = await book_model_1.Book.findOne({ _id: req.params.id });
        if (findBook) {
            res.render('updateBook', { book: findBook });
        }
        else {
            res.render('error');
        }
    }
    catch (e) {
        res.render('error');
    }
});
router.post('/update', upload.none(), async (req, res) => {
    try {
        const findBook = await book_model_1.Book.findOne({ _id: req.body.id });
        if (findBook) {
            findBook.title = req.body.title;
            findBook.description = req.body.description;
            findBook.author = req.body.author;
            await findBook.save();
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
        const listBook = await book_model_1.Book.find();
        if (listBook) {
            res.render('listBook', { books: listBook });
        }
        else {
            res.render('error');
        }
    }
    catch (e) {
        res.render('error');
    }
});
router.get('/delete/:id', async (req, res) => {
    try {
        const findBook = await book_model_1.Book.findOne({ _id: req.params.id });
        if (findBook) {
            await findBook.remove();
            res.status(200).json({ message: "success delete" });
        }
        else {
            res.render('error');
        }
    }
    catch (e) {
        res.end('error');
    }
});
exports.default = router;
//# sourceMappingURL=book.router.js.map