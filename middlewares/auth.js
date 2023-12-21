import jwt from "jsonwebtoken";

import asyncHandler from "express-async-handler";

const auth = asyncHandler(async (req,res,next) =>{

    if(!(req.headers.authorization && req.headers.authorization.startsWith('Bearer'))){

        return res.status(403).json({message:"login again"})
    }

    const token = req.headers.authorization.split(" ")[1];

    const payload = jwt.verify(token, process.env.SECRET);

    if(!payload){
        return res.status(403).json({message:"login again, jwt malformed"})
    }

    req.user = payload._id;

    next();
})

export default auth;