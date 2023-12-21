import express from "express";

import createQuiz from "../controllers/createQuiz.js";

import auth from "../middlewares/auth.js";

import register from "../controllers/register.js";

import login from "../controllers/login.js";

import getQuiz from "../controllers/getQuiz.js";

import getQuizResult from "../controllers/getQuizResult.js";

import getAllQuizes from "../controllers/getAllQuizes.js";

import {createQuizValidate, resultValidate, registerValidate, loginValidate, } from "../middlewares/validate.js"


const router = express.Router();

/**Unsecure routes */

router.post("/register", registerValidate, register)

router.post("/login", loginValidate, login)

/**Secure routes */

router.post("/quizzes", [auth, createQuizValidate], createQuiz)

router.get("/quizzes/active", auth, getQuiz)

router.get("/quizzes/:id/result", [auth, resultValidate], getQuizResult)

router.get("/quizzes/all", auth, getAllQuizes)


export default router;