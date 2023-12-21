import Quiz from "../models/quiz.js";

import asyncHandler from "express-async-handler";

const getQuizResult = asyncHandler(async (req,res)=>{

    const {id} = req.params;

    const quiz = await Quiz.findById(id).select('+rightAnswer +result');

    if(!quiz){
        return res.status(400).json({
            message:"no quiz with the given id found"
        })
    }

    if(quiz.status !== "inactive"){
        return res.status(400).json({
            message:"Result is only available 5 minutes after quiz is finished"
        })
    }

    const {rightAnswer, options, result} = quiz;

    return res.status(200).json({
        rightAnswer: options[rightAnswer],
        result,
    })
})

export default getQuizResult;