import express from 'express';
import bodyParser from "body-parser";
import  mongoose from "mongoose";
import contactRoutes from './src/routes/contact.router'
const port=8080;

const app = express();

mongoose.connect("mongodb+srv://root:Password@nosql.1fyfr.mongodb.net/?retryWrites=true&w=majority").then(() => {
    console.log("connect success")
}).catch((error) => {
    throw error
})
app.set("view engine", "ejs")
app.set('views','./src/views')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))



app.use('/contact',contactRoutes)




app.listen(port,()=>{
    console.log("http://localhost:"+port)
})












