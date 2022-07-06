"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const user_model_1 = require("../schemas/user.model");
const multer_1 = __importDefault(require("multer"));
const upload = (0, multer_1.default)();
router.get('/list', async (req, res) => {
    try {
        const listUser = await user_model_1.User.find();
        res.render('listUser', { listUser: listUser });
    }
    catch (e) {
        res.render('error');
    }
});
router.get('/delete/:id', async (req, res) => {
    try {
        console.log(req.params.id);
        const findUser = await user_model_1.User.findOne({ _id: req.params.id });
        if (findUser) {
            await findUser.remove();
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
router.get('/create', (req, res) => {
    res.render('createUser');
});
router.post('/create', async (req, res) => {
    try {
        const newUser = new user_model_1.User(req.body);
        const user = await newUser.save();
        res.render('success');
    }
    catch (e) {
        res.render('error');
    }
});
router.get('/update/:id', async (req, res) => {
    try {
        const findUser = await user_model_1.User.findOne({ _id: req.params.id });
        if (findUser) {
            res.render("updateUser.ejs", { user: findUser });
        }
        else {
            res.render('error');
        }
    }
    catch (e) {
        res.render('error');
    }
});
router.post('/update', async (req, res) => {
    try {
        console.log(req.body.id);
        const findUserUpdate = await user_model_1.User.findOne({ _id: req.body.id });
        console.log(findUserUpdate);
        if (findUserUpdate) {
            findUserUpdate.name = req.body.name;
            findUserUpdate.code = req.body.code;
            findUserUpdate.email = req.body.email;
            findUserUpdate.phone = req.body.phone;
            await findUserUpdate.save();
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
exports.default = router;
//# sourceMappingURL=user.router.js.map