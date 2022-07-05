
import {Router} from "express";
const router = Router()
import multer from "multer";
import {Product} from "../schemas/product.model";

const upload = multer();


router.get('/create', upload.none(),async (req, res) => {
    res.render('createProduct')
})

router.post('/create', upload.none(),async (req, res) => {
    try{
        const newProduct =  new Product(req.body)
        const product= await newProduct.save();

        if(product){
            res.render('success')
        }else {
            res.render('error')
        }
    }catch (e) {
        res.render('error')
    }
})


router.get('/list', async (req, res) => {
    try {
        let limit:number;
        let offset:number;
        if(!req.query.limit||!req.query.offset){
            limit=3;
            offset=0;
        }else {
            limit= +req.query.limit;
            offset= +req.query.offset;
        }
        const products=await Product.find().limit(3).skip(limit*offset)
        res.render('listProduct',{products:products})
    }catch (e) {
        res.render('error')
    }

})

export default router;