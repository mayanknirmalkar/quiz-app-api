import expressAsyncHandler from "express-async-handler";

import Quiz from "../models/quiz.js";

const updateQuizStatuses = expressAsyncHandler(
    async () => {
        
        
        const currentDate = new Date()

        /**Start the quiz */
       

        const quizesToStart = await Quiz.find({
            status:"yet to start",
            startDate:{$lte: currentDate},
            endDate:{$gt:currentDate}
        });

    

        quizesToStart.forEach(async(quiz) =>{
            quiz.status = 'active';
            await quiz.save();
        })

        /**Finish the quiz */
        const quizesToFinish = await Quiz.find({
            status:"active",
            endDate:{$lte: currentDate},
            $expr:{
                $lt:[
                    currentDate,
                    {
                        $add:["$endDate", 5*60*1000]
                    }
                ]
            }
        });

        

        quizesToFinish.forEach(async(quiz)=>{
            quiz.status = 'finished';
            await quiz.save();
        });

        /**Make the quiz inactive and release the result*/
        const quizesToInactive = await Quiz.find({
            status:"finished",
            $expr:{
                $gte:[
                    currentDate,
                    {
                        $add:["$endDate", 5*60*1000]
                    }
                ]
            }
        });

        

        quizesToInactive.forEach(async(quiz)=>{
            quiz.status = 'inactive';
            await quiz.save()
        })

    }
)

export default updateQuizStatuses;