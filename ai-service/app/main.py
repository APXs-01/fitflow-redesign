from fastapi import FastAPI

from app.routers import workout_plan, nutrition_recognition

app = FastAPI(title="FitFlow AI Service")

app.include_router(workout_plan.router, prefix="/ai/workout-plan", tags=["workout-plan"])
app.include_router(nutrition_recognition.router, prefix="/ai/nutrition", tags=["nutrition"])


@app.get("/health")
def health():
    return {"status": "ok"}
