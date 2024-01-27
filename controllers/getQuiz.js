import Quiz from "../models/quiz.js";

import asyncHandler from "express-async-handler";


const getQuiz = asyncHandler(async (req,res) => {
    
    const quizes = await Quiz.find({status:"active"}).select("+endDate");
    /**if there are no active quiz send a message for no quizzes */
    if(!quizes){
        return res.status(400).json({
            quizes,
            message:"no quizes here"
        })
    }
    /**return response with array of active quizes */
    return res.status(200).json({
        quizes,
        message:"retrieved active quizes"
    })
})

export default getQuiz;