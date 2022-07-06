import {Router} from "express";
const router=Router();
import {User} from "../schemas/user.model";
import multer from "multer"
const upload = multer()

router.get('/list', async (req, res) => {
    try{
        const listUser=await User.find();
        res.render('listUser',{listUser:listUser})
    }catch (e) {
        res.render('error')
    }
})

router.get('/delete/:id', async (req, res) => {
    try {

        const findUser=await User.findOne({_id: req.params.id});
        if(findUser){
            await findUser.remove()
            res.render('success')
        }else {
            res.render('error')
        }
    }catch (e) {
        res.render('error')
    }
})


router.get('/create',  (req, res) => {
    res.render('createUser')
})
router.post('/create', async (req, res) => {
    try{
        const newUser = new User(req.body)
        const user= await newUser.save();
        res.render('success')

    }catch (e) {
        res.render('error')
    }
})


router.get('/update/:id',  async (req, res) => {
try {


    const findUser=await User.findOne({_id:req.params.id})
    if(findUser){
        res.render("updateUser.ejs",{user:findUser})
    }else {
        res.render('error')
    }
}catch (e) {
    res.render('error')
}
})
router.post('/update',async (req, res) => {
try{
    console.log(req.body.id)
    const findUserUpdate = await User.findOne({_id:req.body.id})
    console.log(findUserUpdate)
    if(findUserUpdate){
        findUserUpdate.name = req.body.name;
        findUserUpdate.code = req.body.code;
        findUserUpdate.email = req.body.email;
        findUserUpdate.phone = req.body.phone;
        await findUserUpdate.save();
        res.render('success')
    }else {
        res.render('error')
    }
}catch (e) {
    res.render('error')
}
})


export default router;