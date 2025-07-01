import mongoose from "mongoose";

const PlacementSchema = new mongoose.Schema({
  company: { type: String, required: true },
  position: { type: String, required: true },
  description: String,
  deadline: Date,
  postedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

export default mongoose.model("Placement", PlacementSchema);
