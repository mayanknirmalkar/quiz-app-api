import Quiz from "../models/quiz.js";

import asyncHandler from "express-async-handler";

const getQuizResult = asyncHandler(async (req,res)=>{

    const {id} = req.params;
    /**keeping result hidden while retrieving quiz */
    const quiz = await Quiz.findById(id).select('+rightAnswer +result');

    if(!quiz){
        return res.status(400).json({
            message:"no quiz with the given id found"
        })
    }
    /**when quiz is active or in finished stage, reply with a message */
    if(quiz.status !== "inactive"){
        return res.status(400).json({
            message:"Result is only available 5 minutes after quiz is finished"
        })
    }

    const {rightAnswer, options, result} = quiz;
    /*5 mins after end of quiz send the result */
    return res.status(200).json({
        rightAnswer: options[rightAnswer],
        result,
    })
})

export default getQuizResult;