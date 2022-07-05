import  mongoose from "mongoose";

let DB_url='mongodb+srv://root:Password@nosql.1fyfr.mongodb.net/?retryWrites=true&w=majority'

export default mongoose.connect(DB_url)
.then(()=>{
    console.log("connect success")})
.catch(err =>{
    console.log(err.message)})

