import mongoose from "mongoose";

const PerformanceSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  testDate: { type: Date, default: Date.now },
  score: { type: Number, required: true },
  topic: { type: String, required: true },
});

export default mongoose.model("Performance", PerformanceSchema);
