import mongoose from "mongoose";


const contactSchema=new mongoose.Schema({
    name:String,
    address:String,
    email:String,
    phone:String
})

const contact =mongoose.model('contact',contactSchema)
export {contact}