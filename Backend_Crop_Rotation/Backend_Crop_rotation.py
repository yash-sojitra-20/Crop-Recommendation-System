import google.generativeai as genai
import os
from dotenv import load_dotenv

load_dotenv()
genai.configure(api_key=os.environ["Gemini_Api"])
model = genai.GenerativeModel('gemini-1.5-flash')

string = ""
response = model.generate_content("hi,gemini!")
print(response.text)