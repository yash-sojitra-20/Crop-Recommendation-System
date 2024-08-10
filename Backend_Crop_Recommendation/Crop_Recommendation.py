import pandas as pd

# Load your dataset (ensure the CSV file is in the same directory or provide the full path)
df = pd.read_csv('Crop_recommendation.csv')

def predict_crop(N, P, K, temperature, humidity, ph, rainfall):
    # Initialize variables to find the best match
    best_match = None
    min_distance = float('inf')

    # Iterate through each row in the dataset to find the closest match
    for index, row in df.iterrows():
        distance = (
            abs(row['N'] - N) +
            abs(row['P'] - P) +
            abs(row['K'] - K) +
            abs(row['temperature'] - temperature) +
            abs(row['humidity'] - humidity) +
            abs(row['ph'] - ph) +
            abs(row['rainfall'] - rainfall)
        )

        # Update the best match if the current row has a smaller distance
        if distance < min_distance:
            min_distance = distance
            best_match = row['label']

    return best_match

def main():
    print("Crop Recommendation System")
    
    # Input data from user
    try:
        N = float(input("Enter Nitrogen (N): "))
        P = float(input("Enter Phosphorus (P): "))
        K = float(input("Enter Potassium (K): "))
        temperature = float(input("Enter Temperature: "))
        humidity = float(input("Enter Humidity: "))
        ph = float(input("Enter pH: "))
        rainfall = float(input("Enter Rainfall: "))
    except ValueError:
        print("Invalid input. Please enter numeric values.")
        return
    
    # Get the recommended crop
    recommended_crop = predict_crop(N, P, K, temperature, humidity, ph, rainfall)
    
    if recommended_crop:
        print(f"Recommended Crop: {recommended_crop}")
    else:
        print("No matching crop found")

if __name__ == "__main__":
    main()
