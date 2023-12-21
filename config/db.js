import mongoose from "mongoose";

import asyncHandler from "express-async-handler"

const connectdb = asyncHandler(async () => {
    const connection = await mongoose.connect(process.env.MONGO_URI)
    
    console.log(`Mongodb connected`)
    
})

export default connectdb;