import pandas as pd

# Load your dataset
df = pd.read_csv('Crop_Recommendation.csv')

# Define parameter constraints
constraints = {
    'N': {'min': 0, 'max': 200},
    'P': {'min': 0, 'max': 150},
    'K': {'min': 0, 'max': 300},
    'temperature': {'min': -10, 'max': 50},
    'humidity': {'min': 0, 'max': 100},
    'ph': {'min': 0, 'max': 14},
    'rainfall': {'min': 0, 'max': 3000}
}

def check_constraints(data):
    for param, limit in constraints.items():
        if not (limit['min'] <= data[param] <= limit['max']):
            return f"{param} is out of bounds. Please enter data between ({limit['min']}, {limit['max']})."
    return None

def predict_crop(data):
    # Check if data is within constraints
    constraint_message = check_constraints(data)
    if constraint_message:
        return constraint_message
    
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

# test_data = {
#     'N': 93,  # Out of bounds to trigger the message
#     'P': 53,
#     'K': 40,
#     'temperature': 20,
#     'humidity': 82,
#     'ph': 5,
#     'rainfall': 240
# }

# result = predict_crop(test_data)
# print(result)
    
    # return best_match
