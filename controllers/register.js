import asyncHandler from "express-async-handler";

import User from "../models/user.js";

import generateToken from "../helpers/token.js";

const register = asyncHandler(async (req,res) =>{

    const {email, password} = req.body;
    
    const userExists = await User.findOne({email});
    //user with email already exists
    if(userExists){
        return res.status(400).json({message:'User already exists'})
    }
    
    const user = await User.create({email, password});
    //otherwise create a user
    const token = generateToken(user._id);

    res.status(201).json({
        user,
        token,
        message:"Registration successful"
    })
})

export default register;