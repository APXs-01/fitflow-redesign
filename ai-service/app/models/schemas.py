from pydantic import BaseModel


class WorkoutPlanRequest(BaseModel):
    user_id: str
    fitness_level: str
    available_minutes: int
    goals: list[str]


class WorkoutPlanResponse(BaseModel):
    user_id: str
    exercises: list[str]


class NutritionRecognitionResponse(BaseModel):
    food_items: list[str]
    estimated_calories: int
