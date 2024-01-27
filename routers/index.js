import express from "express";

import createQuiz from "../controllers/createQuiz.js";

import attemptQuiz from "../controllers/attempQuiz.js";

import auth from "../middlewares/auth.js";

import verifyUser from "../controllers/verifyUser.js";

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

router.get("/", auth, verifyUser );

router.post("/quizzes", [auth, createQuizValidate], createQuiz)

router.post("/quizzes/attempt/:id", auth, attemptQuiz)

router.get("/quizzes/active", auth, getQuiz)

router.get("/quizzes/:id/result", [auth, resultValidate], getQuizResult)

router.get("/quizzes/all", auth, getAllQuizes)


export default router;