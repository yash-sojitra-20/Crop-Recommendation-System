from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
import pandas as pd

app = FastAPI()

# CORS Middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allow all origins, adjust as needed
    allow_credentials=True,
    allow_methods=["*"],  # Allow all methods, adjust as needed
    allow_headers=["*"],  # Allow all headers, adjust as needed
)

# Load your dataset
df = pd.read_csv('Crop_Recommendation.csv')

class CropData(BaseModel):
    N: float
    P: float
    K: float
    temperature: float
    humidity: float
    ph: float
    rainfall: float

def predict_crop(data: CropData):
    best_match = None
    min_distance = float('inf')

    for index, row in df.iterrows():
        distance = (
            abs(row['N'] - data.N) +
            abs(row['P'] - data.P) +
            abs(row['K'] - data.K) +
            abs(row['temperature'] - data.temperature) +
            abs(row['humidity'] - data.humidity) +
            abs(row['ph'] - data.ph) +
            abs(row['rainfall'] - data.rainfall)
        )

        if distance < min_distance:
            min_distance = distance
            best_match = row['label']

    return best_match

@app.post("/predict/")
def predict(data: CropData):
    crop = predict_crop(data)
    return {"crop": crop}
