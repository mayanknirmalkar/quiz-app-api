import asyncHandler from "express-async-handler";

import User from "../models/user.js";

import bcrypt from "bcrypt";

import generateToken from "../helpers/token.js";

const login = asyncHandler(async (req,res) =>{

    const {email, password} = req.body;

    const user = await User.findOne({email});
    //if user not found with email
    if(!user){
        return res.status(400).json({message:'Please register'})
    }
    //if user found but password incorrect
    const verifyPassword = await bcrypt.compare(password, user.password);

    if(!verifyPassword){
        return res.status(400).json({message:'Please enter valid credentials'})
    }
    //when everything is okay
    const token = generateToken(user._id);

    res.status(201).json({
        user,
        token,
        message:"Registration successful"
    })
})

export default login;