import mongoose from "mongoose";

import asyncHandler from "express-async-handler"
/**Setting up database using mongoose */
const connectdb = asyncHandler(async () => {
    const connection = await mongoose.connect(process.env.MONGO_URI)
    
    console.log(`Mongodb connected`)
    
})

export default connectdb;