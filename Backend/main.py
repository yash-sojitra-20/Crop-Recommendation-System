from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from crop_recommendation.recommendation import predict_crop  # type: ignore
from crop_rotation.rotation import rotate_crop_and_translate  # type: ignore

app = FastAPI()

# CORS Middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173/"],  # This should match your React app URL
    allow_credentials=True,
    allow_methods=["*"],  # Allow all methods (GET, POST, etc.)
    allow_headers=["*"],  # Allow all headers
)

class CropData(BaseModel):
    N: float
    P: float
    K: float
    temperature: float
    humidity: float
    ph: float
    rainfall: float

@app.post("/predict/")
async def predict(data: CropData):
    # Convert Pydantic model to a dictionary
    crop_data = data.dict()  # Now crop_data is a dictionary
    
    # Pass the dictionary to the predict_crop function
    crop = predict_crop(crop_data)
    
    crop, crop_gujarati, rotated_crop, rotated_crop_gujarati = rotate_crop_and_translate(crop)

    return {
        "crop": crop,
        "cropGujarati": crop_gujarati,
        "rotatedCrop": rotated_crop,
        "rotatedCropGujarati": rotated_crop_gujarati
    }


# Optional: If you need the GET endpoint for testing or other purposes, change the path
@app.post("/test_predict/")
async def predict():
    
    return {
        "crop": 'yash1',
        "cropGujarati": 'yash2',
        "rotatedCrop": 'yash3',
        "rotatedCropGujarati": 'yash4'
    }
