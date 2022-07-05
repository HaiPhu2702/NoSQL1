import express from "express";
import bodyParser from "body-parser"
import mongoose from "mongoose";
import bookRoutes from "./src/router/book.router"

const port = 8080;

const app = express();


app.set('view engine', 'ejs');
app.set('views', './src/views');


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))


const DB_URL = 'mongodb+srv://root:Password@nosql.1fyfr.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(DB_URL)
    .then(() => {
        console.log("connect success")
    })
    .catch((error) => {
        console.log('errrr' + error.message)
    })


app.use('/book', bookRoutes)


app.listen(port, () => {
    console.log("http://localhost:" + port)
})