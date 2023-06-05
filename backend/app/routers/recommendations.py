from fastapi import APIRouter
from schemas import UserInput
from utils import calculate_calories_for_weight_gain, calculate_calories_for_weight_loss, retrieve_diet_recommendations, retrieve_exercise_recommendations

router = APIRouter()




@router.post("/recommendations")
def calculate_recommendations(user_input: UserInput):
    weight = user_input.weight
    height = user_input.height
    goal = user_input.goal

    # Calculate BMI
    bmi = weight / ((height / 100) ** 2)

    # Determine calorie intake based on the goal
    if goal == "gain":
        calorie_intake = calculate_calories_for_weight_gain(weight, height)
    elif goal == "lose":
        calorie_intake = calculate_calories_for_weight_loss(weight, height)
    else:
        return {"message": "Invalid goal"}

    # Retrieve diet and exercise recommendations based on the goal
    diet_recommendations = retrieve_diet_recommendations(goal)
    exercise_recommendations = retrieve_exercise_recommendations(goal)

    return {
        "bmi": bmi,
        "calorie_intake": calorie_intake,
        "diet_recommendations": diet_recommendations,
        "exercise_recommendations": exercise_recommendations,
    }









