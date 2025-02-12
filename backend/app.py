from flask import Flask, request, jsonify
from flask_cors import CORS
from PIL import Image
from transformers import BlipProcessor, BlipForConditionalGeneration
from groq import Groq
from dotenv import load_dotenv
import os

load_dotenv()

app = Flask(__name__)
CORS(app)

# Initialize BLIP model
processor = BlipProcessor.from_pretrained("Salesforce/blip-image-captioning-base")
model = BlipForConditionalGeneration.from_pretrained("Salesforce/blip-image-captioning-base")

# Initialize Groq client
groq_client = Groq(api_key=os.getenv("GROQ_API_KEY"))  

def enhance_caption(base_caption):
    response = groq_client.chat.completions.create(
        model="llama-3.3-70b-versatile", 
        messages=[
            {
                "role": "system",
                "content": """You are a social media expert.
                Change the caption with short and fancy one.
                Generate 5 Captions """
            },
            {
                "role": "user",
                "content": f"Base caption: {base_caption}"
            }
        ],
        temperature=0.7,
        max_tokens=100
    )
    return response.choices[0].message.content.strip()

@app.route('/upload', methods=['POST'])
def generate_caption():
    if 'image' not in request.files:
        return jsonify({"error": "No image uploaded"}), 400

    file = request.files['image']
    try:
        # Step 1: Generate base caption with BLIP
        image = Image.open(file.stream).convert('RGB')
        inputs = processor(image, return_tensors="pt")
        caption_ids = model.generate(**inputs)
        base_caption = processor.decode(caption_ids[0], skip_special_tokens=True)

        # Step 2: Enhance with Groq/Llama3
        social_caption = enhance_caption(base_caption)
        
        return jsonify({"caption": social_caption})
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(port=5000)