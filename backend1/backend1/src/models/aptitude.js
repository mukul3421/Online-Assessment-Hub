import mongoose from "mongoose";

const AptitudeSchema = new mongoose.Schema({
  topic: { type: String, required: true },
  question: { type: String, required: true },
  options: [String],
  answer: { type: String, required: true },
});

export default mongoose.model("Aptitude", AptitudeSchema);
