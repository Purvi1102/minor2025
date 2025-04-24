import Quiz from "../models/Quiz.js";

export const getUserQuizData = async (req, res) => {
    const { userId } = req.params;

    try {
        // Example: fetch previous scores from DB
        const data = await Quiz.find({ userId });
        res.json(data);
    } catch (err) {
        console.error("Error fetching user quiz data:", err);
        res.status(500).json({ message: "Server error fetching quiz data" });
    }
};

export const submitUserScore = async (req, res) => {
    const { userId, quizNumber, quizScore, passed } = req.body;

    try {
        const result = new Quiz({
            userId,
            quizNumber,
            quizScore,
            passed
        });

        await result.save();

        res.status(201).json({ message: "Score saved successfully", result });
    } catch (err) {
        console.error("Error saving quiz result:", err);
        res.status(500).json({ message: "Failed to save score" });
    }
};

