import asyncHandler from "express-async-handler";

import Quiz from "../models/quiz.js";

const createQuiz = asyncHandler( async(req,res) =>{


        let {question, rightAnswer, options, startDate, endDate} = req.body;

        const quizExists = await Quiz.findOne({question});
        /**If the quiz exists with same question, quiz can't be created */
        if(quizExists){
            return res.status(400).json({
                message:"quiz already exists with this question"
            })
        }
        /**Since the date were in client local time, converting it into UTC. All operations are being done in UTC in the backend. But everthing has been kept abstracted for the client */
        startDate = new Date(startDate)

        endDate = new Date(endDate)

        const quiz = await Quiz.create({question, options, rightAnswer, startDate, endDate});

        return res.status(201).json({
            message:"quiz created"
        })
})

export default createQuiz;