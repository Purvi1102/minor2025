import express from "express";
import { submitUserScore, getUserQuizData } from "../controllers/quizController.js";

const router = express.Router();

router.post("/saveScore", submitUserScore);
// router.get("/getScore", getUserQuizData);

export default router;
