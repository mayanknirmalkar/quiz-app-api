import mongoose from "mongoose";

import asyncHandler from "express-async-handler"
/**Setting up database using mongoose */
const connectdb = asyncHandler(async () => {
    const connection = await mongoose.connect("mongodb+srv://mayanknir:Mayank06!@cluster0.7wps3gf.mongodb.net/?retryWrites=true&w=majority")
    
    console.log(`Mongodb connected`)
    
})

export default connectdb;