# Esccot Field Helper 🌾

Esccot Field Helper is a modern, data-driven application designed to empower farmers with precise, weather-aware fertilizer recommendations. By combining soil data, crop requirements, and real-time weather conditions, the app provides a practical and sustainable fertilizer plan tailored to the farmer's specific land area.

---

## 🌟 Key Features

- **Smart Fertilizer Recommendations**: Uses an agricultural-standard logic to suggest Urea, DAP, or NPK Mix based on nutrient deficits (N-P-K).
- **Real-Time Weather Integration**: Connects to [WeatherAPI.com](https://www.weatherapi.com/) to fetch current temperature and rainfall data, automatically adjusting nutrient doses if heavy rain is detected.
- **Farmer-Friendly UI**: Replaces technical jargon with easy-to-understand labels like **"Soil Safety Level"** and provides clear quantities for both **per-acre** and **total field** needs.
- **Sustainability Focused**: Includes a **Soil Safety Level** (Safe, Moderate, or Risky) to help farmers protect long-term soil health and improve yields.
- **Detailed Insights**: The "Why This Recommendation?" section breaks down the specific nutrient units needed for Nitrogen, Phosphorus, and Potassium.

---

## 🛠️ Technical Stack

- **Frontend**: [React](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **API Handling**: [Axios](https://axios-http.com/)
- **Weather Data**: [WeatherAPI.com](https://www.weatherapi.com/)

---

## 📂 Project Structure

```bash
src/
├── components/          # Reusable UI components (shadcn/ui)
│   ├── FieldReport.tsx  # Displays the final fertilizer recommendation
│   └── Navbar.tsx       # Main navigation
├── pages/
│   ├── Home.tsx         # Landing page with project overview
│   └── Recommend.tsx    # Main form and recommendation logic (getRecommendation)
├── utils/
│   └── weather.ts       # WeatherAPI integration and data mapping
├── lib/                 # Utility functions and library configurations
└── main.tsx             # Application entry point
```

---

## ⚙️ Installation & Setup

1. **Clone the Repository**:
   ```bash
   git clone <repository-url>
   cd esccot-field-helper
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Configure API Key**:
   Open [weather.ts](src/utils/weather.ts) and replace the `API_KEY` with your valid key from [WeatherAPI.com](https://www.weatherapi.com/).

4. **Run the Development Server**:
   ```bash
   npm run dev
   ```
   *Note: On Windows, you may need to set the execution policy for PowerShell:*
   `Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope Process; npm run dev`

---

## 🧪 How It Works (The Algorithm)

The **Esccot** recommendation engine follows these steps:

1. **Input Collection**: Gathers Soil Type, Crop Type, Land Area, and Location.
2. **Nutrient Deficit**: Subtracts current soil nutrient values (from `soilData`) from the target crop requirements (from `cropData`).
3. **Weather Adjustment**: Fetches real-time weather data. If rainfall exceeds **100mm**, it increases the Nitrogen dose by **10%** to account for nutrient leaching.
4. **Fertilizer Selection**:
   - **Urea (45kg/acre)**: If Nitrogen has the highest deficit.
   - **DAP (30kg/acre)**: If Phosphorus has the highest deficit.
   - **NPK Mix (35kg/acre)**: If Potassium is high or for balanced needs.
5. **Dose Normalization**: Adjusts the base dose by **±20%** depending on whether the total nutrient deficit is exceptionally high or low.

---

## 📈 Usage for Farmers

1. **Step 1**: Choose your **Soil Type** (Black, Red, Sandy, etc.).
2. **Step 2**: Select the **Crop** you are planting (Wheat, Rice, etc.).
3. **Step 3**: Enter your **Land Area** in acres and your **City Name**.
4. **Step 4**: Click **Check Recommendation** to receive your personalized **Field Report**.
5. **Step 5**: Follow the **Tips for Best Results** for a healthy and high-yield harvest.

---

## 🛡️ License

This project is licensed under the MIT License - see the LICENSE file for details.

---

*Made with ❤️ for the farming community.*

## 👥 Team Contributions

This project was collaboratively developed with contributions from:

- **Neetesh  Dhakad** – Responsible for backend development and server-side logic  
- **** – Responsible for frontend development and user interface design  
- **Nitin Bhagat** – Responsible for bug identification, testing, and quality assurance