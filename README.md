

````markdown
# 🖼️ AI-Powered Image Caption Generator ✨

This is a full-stack **AI Caption Generator** that automatically recognizes the content of an uploaded image and returns **short, fancy social media captions**.

It uses **BLIP (Salesforce)** for image understanding and **LLaMA 3 (via Groq)** for generating enhanced, catchy captions. The frontend is built with **HTML, CSS, and JavaScript**, and the backend is powered by **Flask**.

---

## 🚀 Features

- 🧠 **BLIP Model** for intelligent image captioning
- ✨ **Fancy Caption Generation** with LLaMA 3 via Groq
- 📷 Simple drag-and-drop image upload
- 🌍 Frontend built with HTML, CSS, and JavaScript
- 🔐 Secure API integration using environment variables
- 🌐 CORS-enabled backend

---

## 🎯 Use Case

Perfect for:

- Social media content creators
- Marketing agencies
- Travel/lifestyle bloggers
- Memers and content designers

---

## 🧠 How It Works

1. 📤 User uploads an image through the web UI.
2. 🤖 Flask backend uses the **BLIP model** to generate a base caption.
3. 🧑‍💻 That caption is passed to **LLaMA 3 (Groq API)** to return **5 short & catchy captions**.
4. 🔁 The fancy caption is returned and shown on the frontend.

---

## 🛠️ Tech Stack

### Backend
- Python
- Flask
- BLIP (`Salesforce/blip-image-captioning-base`)
- Groq API with LLaMA 3
- Pillow (Image processing)

### Frontend
- HTML
- CSS
- JavaScript (AJAX + Fetch API)

---

## 📦 Installation

### 🔧 Backend Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/ai-caption-generator.git
   cd ai-caption-generator
````

2. **Create virtual environment and activate**

   ```bash
   python -m venv venv
   source venv/bin/activate  # For Windows: venv\Scripts\activate
   ```

3. **Install dependencies**

   ```bash
   pip install -r requirements.txt
   ```

4. **Set up `.env` file**

   ```
   GROQ_API_KEY=your_groq_api_key_here
   ```

5. **Run the Flask server**

   ```bash
   python app.py
   ```

---

### 🌐 Frontend Setup

1. Navigate to the `/frontend` folder.
2. Open `index.html` in a browser or serve it using a live server.
3. Upload an image and get your caption!

---

## 📁 Project Structure

```
ai-caption-generator/
├── app.py                    # Flask backend
├── .env                      # Groq API key
├── requirements.txt          # Python dependencies
├── frontend/
│   ├── index.html            # Main frontend file
│   ├── styles.css            # CSS styles
│   └── script.js             # JavaScript to call Flask API
└── README.md                 # Project documentation
```

---

## 📷 Example

**Input Image:**
A person standing on a mountain at sunset 🌄

**Generated Captions:**

```
1. Chasing horizons ☀️
2. Sunset vibes only 🌄
3. Peaks and peace 🏞️
4. Golden hour goals ✨
5. On top of the world 🌍
```

---

## 🔐 Security Note

Never expose your `.env` file or API keys in public repositories. Add `.env` to `.gitignore`.

---

## 📬 Contact

Built by \[Your Name]
📧 [labibalif2001@gmail.com](mailto:labibalif2001@gmail.com)
🔗 [LinkedIn](https://www.linkedin.com/in/labibul-ahsan-alif-b70974291/?originalSubdomain=bd)

---

## 📜 License

This project is licensed under the MIT License.


