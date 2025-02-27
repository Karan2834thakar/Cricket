const express=require('express');
const authMiddelware=require('../middelware/authmiddelware');
const router=express.Router();


router.get('/profile',authMiddelware,(req,res)=>{
    res.json({message:"Welcome to your profile",user: req.user})
});

module.exports=router;