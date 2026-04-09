import axios from "axios";

// NOTE: This now uses WeatherAPI.com as per user request.
// API documentation: https://www.weatherapi.com/docs/
const API_KEY = "6970aaec126743db9fb222135260804";

export async function getWeather(city: string) {
  try {
    const res = await axios.get(
      `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=no`
    );

    return {
      temp: res.data.current.temp_c,
      rain: res.data.current.precip_mm || 0,
      isMock: false
    };

  } catch (error: any) {
    console.error("Weather API Error:", error.message);
    
    // If we get a 401 (Unauthorized), 403 (Forbidden), or other errors
    // we return mock data so the application still works for testing.
    if (error.response?.status === 401 || error.response?.status === 403) {
      console.warn("API Key issue (401/403). Using mock weather data for demonstration.");
      return {
        temp: 28.5,
        rain: 5.2,
        isMock: true
      };
    }
    
    throw error;
  }
}
