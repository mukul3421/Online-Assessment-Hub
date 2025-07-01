import Performance from "../models/Performance.js";

export const recordPerformance = async (req, res) => {
  const { score, topic } = req.body;
  try {
    const performance = new Performance({ userId: req.user.id, score, topic });
    await performance.save();
    res.status(201).json({ message: "Performance recorded successfully." });
  } catch (error) {
    res.status(500).json({ error: "Failed to record performance." });
  }
};

export const getStudentPerformance = async (req, res) => {
  try {
    const performances = await Performance.find({ userId: req.params.userId });
    res.json(performances);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve performance." });
  }
};
