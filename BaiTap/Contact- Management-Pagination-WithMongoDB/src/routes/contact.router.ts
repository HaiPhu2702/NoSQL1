import express from "express";
import {contact} from "../schema/contact.model"
const router=express.Router();

router.get('/create', (req, res) => {
res.render('contactCreate')
})

router.post('/create', async (req, res) => {
    console.log(req.body);
    const newContact = new contact(req.body)
    await newContact.save();
res.render('success')
})

router.get('/update/:id', async (req, res) => {
    const contactUpdate = await contact.find({_id:req.params.id})
   res.render('contactUpdate',{contactUpdate:contactUpdate[0]})
})

router.post('/update', async (req, res) => {
const contactUpdate = await contact.findOne({_id:req.body.id})
    
    if(contactUpdate){
        contactUpdate.name = req.body.name;
        contactUpdate.address = req.body.address;
        contactUpdate.email = req.body.email;
        contactUpdate.phone = req.body.phone;
        await contactUpdate.save();
        res.render('success')
    }else{
        res.render('error')
    }


})

router.get('/delete/:id', async (req, res) => {
const deleteContact = await contact.findOne({_id: req.params.id})
    deleteContact.remove();
res.render('success')
})

router.get('/list', async (req, res) => {
const listContact=await  contact.find();
res.render('contactList', {listContact: listContact})
})

export default router;