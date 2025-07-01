import Aptitude from "../models/Aptitude.js";

export const getQuestions = async (req, res) => {
  try {
    const questions = await Aptitude.find();
    res.json(questions);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve questions." });
  }
};
