import asyncHandler from "express-async-handler";

import Quiz from "../models/quiz.js";

const attemptQuiz = asyncHandler( async(req,res) => {

    const {id} = req.params;

    const quiz = await Quiz.findById(id).select("+rightAnswer")

    const { answer } = req.body;

    if(!answer && answer != 0 ){
        res.status(200).json({
            message:"Not Attempted"
        })
    }

    quiz.status = "finished";

    const result = answer == quiz.rightAnswer ? "correct" : "incorrect";

    quiz.result = result;

    await quiz.save();

    res.status(200).json({
        message:"Submitted"
    })
})

export default attemptQuiz;