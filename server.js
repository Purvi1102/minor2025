import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes.js";
import quizRoutes from "./routes/quizRoutes.js";
import cors from "cors";
import path from "path";

dotenv.config();
const __dirname = path.resolve(); // This gives you the absolute path

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/auth", authRoutes);
app.use("/api/quiz", quizRoutes);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "login.html"));
});

app.get("/signup", (req, res) => {
  res.sendFile(path.join(__dirname, "signup.html"));
});

app.get("/home", (req, res) => {
  res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/quiz", (req, res) => {
  res.sendFile(path.join(__dirname, "newquiz.html"));
});

// ✅ NEW CODE for pro.html (added here)
app.get("/pro", (req, res) => {
  res.sendFile(path.join(__dirname, "pro.html"));
});

app.get("/dict", (req, res) => {
  res.sendFile(path.join(__dirname, "dict.html"));
});

const PORT = process.env.PORT || 5003;
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(PORT, () => console.log("Server running on port " + PORT));
  })
  .catch(err => console.error(err));