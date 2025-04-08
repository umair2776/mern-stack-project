const express=require("express")
const router=express.Router()
const { userRegister, userLogin, userLogout }=require("../controller/user.controllers")


router.post('/register',userRegister)
router.post('/login',userLogin)
router.post('/logout',userLogout)




module.exports=router