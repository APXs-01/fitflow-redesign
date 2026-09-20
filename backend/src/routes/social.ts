import { Router } from "express";

const router = Router();

// GET /api/social/feed/:circleId -> fetches posts for a private social circle
router.get("/feed/:circleId", (req, res) => {
  res.json({ circleId: req.params.circleId, posts: [], message: "stub: backed by Firestore real-time listener" });
});

export default router;
