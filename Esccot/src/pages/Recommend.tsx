import { useState } from "react";
import { Sprout, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import FieldReport from "@/components/FieldReport";
import CropInsights from "@/components/CropInsights";
import { getWeather } from "@/utils/weather";
import { cropTypes, cropNutrientData } from "@/data/crops";

const soilTypes = [
  { label: "Black", value: "black" },
  { label: "Red", value: "red" },
  { label: "Sandy", value: "sandy" },
  { label: "Clay", value: "clay" },
  { label: "Alluvial", value: "alluvial" },
];

const soilData: Record<string, any> = {
  black: { nVal: 60, pVal: 40, kVal: 50, score: 75 },
  red: { nVal: 30, pVal: 20, kVal: 40, score: 60 },
  sandy: { nVal: 25, pVal: 35, kVal: 20, score: 55 },
  clay: { nVal: 55, pVal: 60, kVal: 65, score: 70 },
  alluvial: { nVal: 70, pVal: 75, kVal: 80, score: 85 },
};

export interface RecommendationData {
  fertilizer: string;
  quantityPerAcre: string;
  totalQuantity: string;
  soil: { nitrogen: string; phosphorus: string; potassium: string };
  weather: { temperature: string; rainfall: string };
  reasons: string[];
  safetyLevel: number;
  tips: string[];
}

const getStatus = (deficit: number) => {
  if (deficit > 30) return "Low";
  if (deficit > 10) return "Medium"; // deficit between 10-30
  return "Good"; // deficit <= 10 and 0
};

const getRecommendation = ({ soilType, cropType, area, weather }: any): RecommendationData => {
  const sData = soilData[soilType];
  const cData = cropNutrientData[cropType];
  const acres = parseFloat(area) || 1;

  // Deficit Calculation
  let nDeficit = Math.max(0, cData.nReq - sData.nVal);
  let pDeficit = Math.max(0, cData.pReq - sData.pVal);
  let kDeficit = Math.max(0, cData.kReq - sData.kVal);

  const rainfall = weather.rain;
  const temp = weather.temp;
  let reasons = [
    `Nitrogen needed: ${nDeficit} units`,
    `Phosphorus needed: ${pDeficit} units`,
    `Potassium needed: ${kDeficit} units`
  ];
  
  // Fertilizer selection based on highest deficit
  let fertilizer = "NPK Mix";
  let baseDosePerAcre = 35; // Default for NPK Mix

  if (nDeficit > pDeficit && nDeficit > kDeficit) {
    fertilizer = "Urea";
    baseDosePerAcre = 45;
    reasons.push(`${cropType.charAt(0).toUpperCase() + cropType.slice(1)} needs more Nitrogen for growth.`);
  } else if (pDeficit > nDeficit && pDeficit > kDeficit) {
    fertilizer = "DAP";
    baseDosePerAcre = 30;
    reasons.push("Phosphorus is critical for root development in this soil.");
  } else {
    fertilizer = "NPK Mix";
    baseDosePerAcre = 35;
    reasons.push("A balanced NPK mix is recommended for overall crop health.");
  }

  // Adjust dose based on total deficit
  const totalDeficit = nDeficit + pDeficit + kDeficit;
  let doseAdjustment = 1.0;
  if (totalDeficit > 100) {
    doseAdjustment = 1.2; // High deficit: +20%
  } else if (totalDeficit < 40) {
    doseAdjustment = 0.8; // Low deficit: -20%
  }

  // Weather adjustment: If rainfall > 100 mm → increase quantity slightly (10%)
  if (rainfall > 100) {
    doseAdjustment *= 1.1;
    reasons.push("High rainfall detected: dose increased by 10% to account for nutrient loss.");
  }

  // Final quantity calculations
  const quantityPerAcreValue = baseDosePerAcre * doseAdjustment;
  const totalQuantityValue = quantityPerAcreValue * acres;

  // Debugging logs as requested
  console.log("Input:", { soilType, cropType, area, rainfall });
  console.log("Nutrient Deficit (N-P-K):", { nDeficit, pDeficit, kDeficit });
  console.log("Calculations:", { baseDosePerAcre, doseAdjustment });
  console.log("Final Quantity (per acre, total):", { quantityPerAcreValue, totalQuantityValue });

  return {
    fertilizer,
    quantityPerAcre: `${quantityPerAcreValue.toFixed(1)} kg/acre`,
    totalQuantity: `${totalQuantityValue.toFixed(1)} kg`,
    soil: {
      nitrogen: getStatus(nDeficit),
      phosphorus: getStatus(pDeficit),
      potassium: getStatus(kDeficit),
    },
    weather: {
      temperature: `${temp.toFixed(1)}°C`,
      rainfall: `${rainfall.toFixed(1)} mm`,
    },
    reasons,
    safetyLevel: sData.score,
    tips: [
      "Apply fertilizer in 2–3 parts instead of all at once",
      "Avoid applying just before heavy rain",
      "Avoid overuse to protect long-term soil health",
    ],
  };
};

const Recommend = () => {
  const [soil, setSoil] = useState("");
  const [crop, setCrop] = useState("");
  const [area, setArea] = useState("");
  const [location, setLocation] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<RecommendationData | null>(null);
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    if (!soil || !crop || !area || !location) {
      setError("Please fill in all fields before checking.");
      return;
    }
    setError("");
    setLoading(true);
    setResult(null);

    try {
      const weatherData = await getWeather(location);
      
      if (weatherData.isMock) {
        setError("Note: Using mock weather data due to invalid API key.");
      }
      
      const recommendation = getRecommendation({
        soilType: soil,
        cropType: crop,
        area,
        weather: weatherData,
      });
      setResult(recommendation);
    } catch (err) {
      console.error(err);
      setError("Could not fetch weather data. Please check your city name.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="py-10 md:py-16">
      <div className="container max-w-xl">
        <div className="text-center mb-8">
          <h1 className="text-2xl md:text-3xl font-heading font-bold mb-2">Get Your Recommendation</h1>
          <p className="text-muted-foreground">Tell us about your field and we'll suggest the right fertilizer.</p>
        </div>

        <div className="rounded-xl border border-border bg-card p-6 md:p-8 shadow-sm">
          <div className="space-y-5">
            <div>
              <Label htmlFor="soil">Soil Type</Label>
              <Select value={soil} onValueChange={setSoil}>
                <SelectTrigger id="soil" className="mt-1.5"><SelectValue placeholder="Select soil type" /></SelectTrigger>
                <SelectContent>
                  {soilTypes.map((s) => <SelectItem key={s.value} value={s.value}>{s.label}</SelectItem>)}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="crop">Crop Type</Label>
              <Select value={crop} onValueChange={setCrop}>
                <SelectTrigger id="crop" className="mt-1.5"><SelectValue placeholder="Select crop" /></SelectTrigger>
                <SelectContent>
                  {cropTypes.map((c) => <SelectItem key={c.value} value={c.value}>{c.label}</SelectItem>)}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="area">Land Area (acres)</Label>
              <Input id="area" type="number" min="0.5" step="0.5" placeholder="e.g. 2" value={area} onChange={(e) => setArea(e.target.value)} className="mt-1.5" />
            </div>
            <div>
              <Label htmlFor="location">Location (city name)</Label>
              <Input id="location" placeholder="e.g. Nagpur" value={location} onChange={(e) => setLocation(e.target.value)} className="mt-1.5" />
            </div>

            {error && <p className="text-sm text-destructive">{error}</p>}

            <Button className="w-full gap-2" size="lg" onClick={handleSubmit} disabled={loading}>
              {loading ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Checking soil and weather conditions...
                </>
              ) : (
                <>
                  <Sprout className="h-4 w-4" />
                  Check Recommendation
                </>
              )}
            </Button>
          </div>
        </div>
      </div>

      {result && (
          <div className="container max-w-2xl mt-10 space-y-8">
            <FieldReport data={result} />
            <CropInsights cropValue={crop} reasons={result.reasons} />
          </div>
        )}
    </div>
  );
};

export default Recommend;
