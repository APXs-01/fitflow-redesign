import { Router } from "express";

const router = Router();

// POST /api/nutrition/log -> logs a meal (photo handled client-side, sent to ai-service for recognition)
router.post("/log", (req, res) => {
  res.json({ received: true, entry: req.body, message: "stub: persist to Firestore" });
});

export default router;
