import Quiz from "../models/quiz.js";

import asyncHandler from "express-async-handler";

const getAllQuizes = asyncHandler(async (req,res) => {
    
    const quizes = await Quiz.find();

    if(!quizes){
        return res.status(400).json({
            quizes,
            message:"no quizes here"
        })
    }

    return res.status(200).json({
        quizes,
        message:"retrieved quizes"
    })
})

export default getAllQuizes;