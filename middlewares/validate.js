import { z } from "zod";

import expressAsyncHandler from "express-async-handler";

import mongoose from "mongoose";

/**
 * In each of the below given middlewares, we are first creating a schema of the expected input and then using the zod function parse validating if the input matches the schema created. If it doesn't match the schema it throws zoderror which is a validation error
 */

export const createQuizValidate = expressAsyncHandler((req, res, next) =>{


    let {question, options, rightAnswer, startDate, endDate} = req.body;
        
    
        const questionSchema = z.string().regex(/^[a-zA-Z0-9\s.,!?'"()]*$/);
        const optionsSchema = z.array(z.string());
        const rightAnswerSchema = z.number();
        const startDateSchema = z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}$/);
        const endDateSchema = z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}$/);
    

        questionSchema.parse(question);
        optionsSchema.parse(options);
        rightAnswerSchema.parse(rightAnswer);
        startDateSchema.parse(startDate);
        endDateSchema.parse(endDate);

    next();
})


export const loginValidate = expressAsyncHandler((req,res,next) =>{
    
    const body = req.body;

    const bodySchema = z.object({
        email: z.string().email(),
        password: z.string(),
    })

    bodySchema.parse(body)

    next();
})



export const registerValidate = expressAsyncHandler((req,res,next) =>{

    const body = req.body;

    const bodySchema = z.object({
        email: z.string().email(),
        password: z.string(),
    })

    bodySchema.parse(body)

    next();
})


export const resultValidate = expressAsyncHandler((req,res,next) =>{

    const id = req.params;

    if(!mongoose.isValidObjectId(id)){
        res.status(411).json({message:"id sent is invalid"})
    }

    next();
})