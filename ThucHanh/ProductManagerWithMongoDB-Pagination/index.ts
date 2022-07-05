import express from 'express';
import bodyParser from "body-parser";
import  mongoose from "mongoose";
const port=8080;
import productRouter from "./src/routes/product.router"
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}))

app.set("view engine", "ejs")
app.set('views','./src/views')

const DB_URL='mongodb+srv://root:Password@nosql.1fyfr.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(DB_URL)
    .then(()=>{
        console.log("connect success")})
    .catch(err =>console.log(err.message))




app.use('/product',productRouter)



app.listen(port,()=>{
    console.log('http://localhost:'+port)
})