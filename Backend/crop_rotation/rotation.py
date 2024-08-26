import google.generativeai as genai
import google.generativeai as generativeai
import os
from dotenv import load_dotenv

load_dotenv()

# Configure Generative AI model
genai.configure(api_key=os.environ["Gemini_Api"])
model = genai.GenerativeModel('gemini-1.5-flash')

def rotate_crop_and_translate(crop):
    # Generate the next best crop suggestion based on rotation
    prompt_rotated_crop = f"What is the best crop to plant after growing {crop} to maintain soil health and maximize yield? ((only give crop 'name') or (Not available))"
    response_rotated_crop = model.generate_content(prompt_rotated_crop)
    
    rotated_crop = response_rotated_crop.text.strip()

    # Translate the original crop and the rotated crop to Gujarati using the Gemini API
    prompt_translate_crop = f"Translate '{crop}' into Gujarati."
    response_crop_guj = model.generate_content(prompt_translate_crop)
    crop_gujarati = response_crop_guj.text.strip()

    prompt_translate_rotated_crop = f"Translate '{rotated_crop}' into Gujarati."
    response_rotated_crop_guj = model.generate_content(prompt_translate_rotated_crop)
    rotated_crop_gujarati = response_rotated_crop_guj.text.strip()

    return crop, crop_gujarati, rotated_crop, rotated_crop_gujarati
