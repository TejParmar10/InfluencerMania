const express=require('express');
const mongoose = require('mongoose');
const User=require('../DB/User');
const route=express.Router();
route.post('/',async(req,res)=>{
    const{firstName,lastName,UserName,Password}=req.body;
    let user={};
    user.firstName=firstName;
    user.lastName=lastName;
    user.UserName=UserName;
    user.Password=Password;
    let userModel=new User(user);
    await userModel.save();
    res.json(userModel);
});
module.exports=route;