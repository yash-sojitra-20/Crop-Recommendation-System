import google.generativeai as genai
import os
from dotenv import load_dotenv

load_dotenv()

# Configure Generative AI model
genai.configure(api_key=os.environ["Gemini_Api"])
model = genai.GenerativeModel('gemini-1.5-flash')

def rotate_crop(crop):
    # Generate the next best crop suggestion based on rotation
    prompt = f"What is the best crop to plant after growing {crop} to maintain soil health and maximize yield?"
    response = model.generate_content(prompt)
    
    rotated_crop = response.text.strip()
    return rotated_crop
