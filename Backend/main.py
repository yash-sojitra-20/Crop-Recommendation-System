from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
from crop_recommendation.recommendation import predict_crop # type: ignore
from crop_rotation.rotation import rotate_crop # type: ignore

app = FastAPI()

# CORS Middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
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
def predict(data: CropData):
    crop_data = data.model_dump()  # Use model_dump() instead of dict()
    crop = predict_crop(crop_data)
    rotated_crop = rotate_crop(crop)
    
    return {"crop": crop, "rotatedCrop": rotated_crop}