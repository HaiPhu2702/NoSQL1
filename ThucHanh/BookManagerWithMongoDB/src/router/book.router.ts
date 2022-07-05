import {Router} from "express"
const router = Router()

import {Book} from "../schemas/book.model";

import multer from "multer"
const upload = multer()

router.get('/create', (req, res) => {
    res.render('createBook')
})

router.post('/create', upload.none(), async (req, res) => {
    try {
        const newBook = new Book(req.body)
        const book = await newBook.save();
        if (book) {
            res.render('success')
        } else {
            res.render('error')
        }
    } catch (e) {
        res.render('error')
    }

})

router.get('/update/:id', async (req, res) => {
    try{
        const findBook=await Book.findOne({_id: req.params.id})
        if(findBook){
            res.render('updateBook',{book:findBook})
        }else {
            res.render('error')
        }
    }catch (e) {
        res.render('error')
    }
})

router.post('/update', upload.none(), async (req, res) => {
    try {
        const findBook = await Book.findOne({_id: req.body.id})
        if (findBook) {
            findBook.title = req.body.title;
            findBook.description = req.body.description;
            findBook.author = req.body.author
            await findBook.save()
            res.render('success')
        } else {
            res.render('error')
        }
    } catch (e) {
        res.render('error')
    }
});

router.get('/list', async (req, res) => {
       try{
           const listBook = await Book.find()
           if (listBook) {
               res.render('listBook',{books:listBook})
           }else {
               res.render('error')
           }
       }catch (e) {
           res.render('error')
       }
})

router.get('/delete/:id',async (req,res)=>{
    try{

        const findBook=await Book.findOne({_id:req.params.id})
        if (findBook) {
            await findBook.remove();
            res.status(200).json({message:"success delete"})

        }else {
            res.render('error')
        }
    }catch (e) {
        res.end('error')
    }
})


export default router;