"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const contact_model_1 = require("../schema/contact.model");
const router = express_1.default.Router();
router.get('/create', (req, res) => {
    res.render('contactCreate');
});
router.post('/create', async (req, res) => {
    console.log(req.body);
    const newContact = new contact_model_1.contact(req.body);
    await newContact.save();
    res.render('success');
});
router.get('/update/:id', async (req, res) => {
    const contactUpdate = await contact_model_1.contact.find({ _id: req.params.id });
    res.render('contactUpdate', { contactUpdate: contactUpdate[0] });
});
router.post('/update', async (req, res) => {
    const contactUpdate = await contact_model_1.contact.findOne({ _id: req.body.id });
    if (contactUpdate) {
        contactUpdate.name = req.body.name;
        contactUpdate.address = req.body.address;
        contactUpdate.email = req.body.email;
        contactUpdate.phone = req.body.phone;
        await contactUpdate.save();
        res.render('success');
    }
    else {
        res.render('error');
    }
});
router.get('/delete/:id', async (req, res) => {
    const deleteContact = await contact_model_1.contact.findOne({ _id: req.params.id });
    deleteContact.remove();
    res.render('success');
});
router.get('/list', async (req, res) => {
    const listContact = await contact_model_1.contact.find();
    res.render('contactList', { listContact: listContact });
});
exports.default = router;
//# sourceMappingURL=contact.router.js.map