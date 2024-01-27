import mongoose from "mongoose";
 
import dotenv from "dotenv"

import asyncHandler from "express-async-handler"
/**Setting up database using mongoose */

dotenv.config()
const connectdb = asyncHandler(async () => {
    const connection = await mongoose.connect(process.env.URI)
    
    console.log(`Mongodb connected`)
    
})

export default connectdb;