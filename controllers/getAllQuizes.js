import Quiz from "../models/quiz.js";

import asyncHandler from "express-async-handler";

const getAllQuizes = asyncHandler(async (req,res) => {
    
    const quizes = await Quiz.find().select("+startDate +endDate");
    
    /**if there are no quiz send a message for no quizzes */

    if(!quizes){
        return res.status(400).json({
            quizes,
            message:"no quizes here"
        })
    }
    /**return response with array of quizes */
    return res.status(200).json({
        quizes,
        message:"retrieved quizes"
    })
})

export default getAllQuizes;