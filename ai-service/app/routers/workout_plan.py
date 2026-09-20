from fastapi import APIRouter

from app.models.schemas import WorkoutPlanRequest, WorkoutPlanResponse

router = APIRouter()


@router.post("/", response_model=WorkoutPlanResponse)
def generate_workout_plan(request: WorkoutPlanRequest) -> WorkoutPlanResponse:
    # stub: replace with TensorFlow Lite / model inference call
    return WorkoutPlanResponse(user_id=request.user_id, exercises=["stub-exercise-1", "stub-exercise-2"])
