import mongoose from "mongoose";

const quizSchema = new mongoose.Schema({
  userId: { type: String, required: true, ref: "User" },
  quizNumber: {type: String, required: true},
  quizScore: { type: String, required: true },
  passed: { type: String, enum: ['1', '0'], required: true },
});

export default mongoose.model("Quiz", quizSchema);
