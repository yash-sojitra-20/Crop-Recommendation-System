import pandas as pd

# Load your dataset
df = pd.read_csv('Crop_Recommendation.csv')

def predict_crop(data):
    best_match = None
    min_distance = float('inf')

    for index, row in df.iterrows():
        distance = (
            abs(row['N'] - data['N']) +
            abs(row['P'] - data['P']) +
            abs(row['K'] - data['K']) +
            abs(row['temperature'] - data['temperature']) +
            abs(row['humidity'] - data['humidity']) +
            abs(row['ph'] - data['ph']) +
            abs(row['rainfall'] - data['rainfall'])
        )

        if distance < min_distance:
            min_distance = distance
            best_match = row['label']

    return best_match
