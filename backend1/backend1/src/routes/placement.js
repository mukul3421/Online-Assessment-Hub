import express from "express";
import { createPlacement, getPlacements } from "../controllers/placementController.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const router = express.Router();
router.post("/", authMiddleware("faculty"), createPlacement);
router.get("/", getPlacements);

export default router;