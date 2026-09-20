import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import workoutRoutes from "./routes/workouts";
import nutritionRoutes from "./routes/nutrition";
import socialRoutes from "./routes/social";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.get("/health", (_req, res) => {
  res.json({ status: "ok" });
});

app.use("/api/workouts", workoutRoutes);
app.use("/api/nutrition", nutritionRoutes);
app.use("/api/social", socialRoutes);

app.listen(PORT, () => {
  console.log(`FitFlow API gateway listening on port ${PORT}`);
});
