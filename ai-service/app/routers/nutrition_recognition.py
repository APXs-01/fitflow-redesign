from fastapi import APIRouter, UploadFile

from app.models.schemas import NutritionRecognitionResponse

router = APIRouter()


@router.post("/recognize", response_model=NutritionRecognitionResponse)
async def recognize_food(image: UploadFile) -> NutritionRecognitionResponse:
    # stub: replace with computer vision model call
    return NutritionRecognitionResponse(food_items=["stub-food-item"], estimated_calories=0)
