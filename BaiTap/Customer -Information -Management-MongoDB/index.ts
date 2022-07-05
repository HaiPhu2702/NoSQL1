
import express from "express"
import bodyParser from "body-parser";
import connectDB from "./src/schemas/ConectDB";
import userRoutes from "./src/routes/user.router"
const port=8080;

//ket noi DB
connectDB;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.set('view engine', 'ejs')
app.set('views',"./src/views")


app.use('/user',userRoutes)

app.listen(port,()=>{
    console.log("http://localhost:"+port)
})