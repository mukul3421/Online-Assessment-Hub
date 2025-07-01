import express from "express";
import { recordPerformance, getStudentPerformance } from "../controllers/performanceController.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const router = express.Router();
router.post("/", authMiddleware("student"), recordPerformance);
router.get("/:userId", authMiddleware("faculty"), getStudentPerformance);

export default router;
