import mongoose from "mongoose";

const quizSchema = new mongoose.Schema({

    question:{
        type:String,
        required:[true, 'question is required'],
    },
    options:{
        type:[{type:String}],
        required:[true, 'options is required'],
    },
    rightAnswer:{
        type:Number,
        enum:[0, 1, 2, 3],
        required:[true, 'answer is required'],
        select:false
    },
    status:{
        type:String,
        enum:["yet to start","active", "finished", "inactive"],
        default:"yet to start",
    },
    result:{
        type:String,
        enum:["correct", "incorrect", "not attempted"],
        default:"not attempted",
        select:false
    },
    startDate:{
        type:Date,
        required:[true, 'startDate is required'],
        select:false,
    },
    endDate:{
        type:Date,
        required:[true, 'endDate is required'],
        select:false,
    }

})

const Quiz = mongoose.model('Quiz', quizSchema);

export default Quiz;