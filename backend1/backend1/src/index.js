import mongoose from "mongoose";
import express from "express";
import connectDB from "./db/index.js"
import dotenv from "dotenv";
import authRoutes from "./routes/auth.js";
import aptitudeRoutes from "./routes/aptitude.js";
import placementRoutes from "./routes/placement.js";
import performanceRoutes from "./routes/performance.js";
import cors from "cors";

dotenv.config({
    path: './.env'
})

const app = express();
app.use(express.json());

app.use(cors());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected successfully"))
  .catch((error) => console.log("MongoDB connection error:", error));

connectDB();

// Routes
app.use("/api", authRoutes);
app.use("/api/aptitude", aptitudeRoutes);
app.use("/api/placements", placementRoutes);
app.use("/api/performance", performanceRoutes);

// Starting the Server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


