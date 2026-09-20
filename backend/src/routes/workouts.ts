import { Router } from "express";

const router = Router();

// GET /api/workouts/plan/:userId -> fetches (or triggers) an AI-generated workout plan
router.get("/plan/:userId", (req, res) => {
  res.json({ userId: req.params.userId, plan: [], message: "stub: wire up ai-service call" });
});

export default router;
