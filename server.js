/**Importing dependencies*/
import express from "express";

import dotenv from "dotenv";

import connectdb from "./config/db.js";

import router from "./routers/index.js";

import cron from "node-cron";

import updateQuizStatuses from "./helpers/cronjob.js";

import limiter from "./middlewares/rateLimiter.js";

import errorHandler from "./middlewares/errorHandler.js"

dotenv.config()

const {PORT} = process.env;


/**Setting up server and adding middlewares*/
const app = express();

//connecting db
connectdb();

//parsing body and url
app.use(express.json());
app.use(express.urlencoded({extended:true}))
//rate limiter
app.use(limiter);

/**Routes */
app.use("/", router)

/**Cron Job */
cron.schedule(`* * * * *`, updateQuizStatuses)

/**Global catch */
app.use(errorHandler)

app.listen(PORT, ()=>{
    console.log(`Server listening at ${PORT}`)
})