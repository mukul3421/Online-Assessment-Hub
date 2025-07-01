import Placement from "../models/Placement.js";

export const createPlacement = async (req, res) => {
  const { company, position, description, deadline } = req.body;
  try {
    const placement = new Placement({ company, position, description, deadline, postedBy: req.user.id });
    await placement.save();
    res.status(201).json({ message: "Placement posted successfully." });
  } catch (error) {
    res.status(500).json({ error: "Failed to post placement." });
  }
};

export const getPlacements = async (req, res) => {
  try {
    const placements = await Placement.find().populate("postedBy", "username");
    res.json(placements);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve placements." });
  }
};
