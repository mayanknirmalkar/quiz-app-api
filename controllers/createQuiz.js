import asyncHandler from "express-async-handler";

import Quiz from "../models/quiz.js";

const createQuiz = asyncHandler( async(req,res) =>{

        let {question, rightAnswer, options, startDate, endDate} = req.body;

        const quizExists = await Quiz.findOne({question});

        if(quizExists){
            return res.status(400).json({
                message:"quiz already exists with this question"
            })
        }

        startDate = new Date(startDate)

        endDate = new Date(endDate)

        const quiz = await Quiz.create({question, options, rightAnswer, startDate, endDate});

        return res.status(201).json({
            message:"quiz created"
        })
})

export default createQuiz;