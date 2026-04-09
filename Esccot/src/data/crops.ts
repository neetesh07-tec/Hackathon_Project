export interface CropNutrient {
  nReq: number;
  pReq: number;
  kReq: number;
}

export const cropTypes = [
  { label: "Wheat", value: "wheat" },
  { label: "Rice", value: "rice" },
  { label: "Maize", value: "maize" },
  { label: "Soybean", value: "soybean" },
  { label: "Cotton", value: "cotton" },
  { label: "Potato", value: "potato" },
  { label: "Tomato", value: "tomato" },
  { label: "Onion", value: "onion" },
  { label: "Sugarcane", value: "sugarcane" },
  { label: "Mustard", value: "mustard" },
];

export const cropNutrientData: Record<string, CropNutrient> = {
  wheat: { nReq: 120, pReq: 60, kReq: 40 },
  rice: { nReq: 100, pReq: 50, kReq: 50 },
  maize: { nReq: 180, pReq: 80, kReq: 60 },
  soybean: { nReq: 30, pReq: 80, kReq: 60 },
  cotton: { nReq: 100, pReq: 50, kReq: 80 },
  potato: { nReq: 150, pReq: 80, kReq: 100 },
  tomato: { nReq: 120, pReq: 60, kReq: 80 },
  onion: { nReq: 100, pReq: 50, kReq: 60 },
  sugarcane: { nReq: 200, pReq: 100, kReq: 120 },
  mustard: { nReq: 80, pReq: 40, kReq: 40 },
};
