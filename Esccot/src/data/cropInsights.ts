export interface NutrientInfo {
  nitrogen: string;
  phosphorus: string;
  potassium: string;
}

export interface CropInsight {
  type: "Heavy feeder" | "Moderate feeder" | "Light feeder";
  duration: string;
  description: string;
  nutrients: NutrientInfo;
  risk: string;
}

export const cropInsights: Record<string, CropInsight> = {
  wheat: {
    type: "Moderate feeder",
    duration: "110–130 days",
    description: "Wheat is a staple cereal crop that requires balanced nutrition for optimal grain filling and tillering. It is particularly sensitive to nitrogen levels during its vegetative phase and phosphorus during early root establishment.",
    nutrients: {
      nitrogen: "High – Essential for vegetative growth, tillering, and protein content in grains.",
      phosphorus: "Medium – Critical for root development and early plant vigor.",
      potassium: "Medium – Enhances water use efficiency and straw strength."
    },
    risk: "Inadequate fertilization leads to fewer tillers, smaller grains, and increased susceptibility to lodging and rust diseases."
  },
  rice: {
    type: "Heavy feeder",
    duration: "105–150 days",
    description: "Rice thrives in flooded conditions and has high nutrient demands, especially for nitrogen. Proper nutrient management is crucial for panicle initiation and maximizing the number of filled grains per panicle.",
    nutrients: {
      nitrogen: "Very High – Primary driver for leaf area index and grain yield.",
      phosphorus: "Medium – Necessary for root growth and timely maturity.",
      potassium: "High – Improves resistance to pests, diseases, and environmental stress."
    },
    risk: "Nutrient deficiency results in poor tillering, yellowish leaves, and significantly reduced grain weight and quality."
  },
  maize: {
    type: "Heavy feeder",
    duration: "90–120 days",
    description: "Maize is known for its rapid growth and high biomass production, making it a heavy consumer of soil nutrients. It requires a steady supply of nitrogen throughout its lifecycle, with peak demand during the silking stage.",
    nutrients: {
      nitrogen: "High – Essential for large leaf area and kernel development.",
      phosphorus: "High – Critical for energy transfer and kernel set.",
      potassium: "Medium – Regulates water balance and strengthens stalks."
    },
    risk: "Poor fertilization leads to stunted plants, small ears with missing kernels, and weak stalks prone to breaking."
  },
  soybean: {
    type: "Moderate feeder",
    duration: "70–100 days",
    description: "As a legume, soybean can fix atmospheric nitrogen through root nodules, but it still requires significant phosphorus and potassium for healthy pod development and high oil content.",
    nutrients: {
      nitrogen: "Low – Mostly met through biological fixation; small starter dose helps.",
      phosphorus: "High – Essential for nodulation and energy for pod formation.",
      potassium: "High – Critical for water regulation and seed quality."
    },
    risk: "Deficiency causes poor nodulation, yellowing of older leaves, and reduced pod number and seed size."
  },
  cotton: {
    type: "Heavy feeder",
    duration: "150–180 days",
    description: "Cotton is a long-duration crop with deep roots that requires intensive nutrient management. It is particularly sensitive to potassium levels, which directly affect fiber quality and boll development.",
    nutrients: {
      nitrogen: "High – Promotes vegetative growth and fruiting branch formation.",
      phosphorus: "Medium – Supports early root development and boll maturity.",
      potassium: "Very High – Crucial for fiber strength, length, and boll opening."
    },
    risk: "Inadequate nutrients lead to premature boll shedding, weak fibers, and increased vulnerability to wilt diseases."
  },
  potato: {
    type: "Heavy feeder",
    duration: "90–120 days",
    description: "Potato is a high-yielding tuber crop that extracts large amounts of nutrients from the soil in a relatively short period. Potassium is the most critical nutrient for starch synthesis and tuber bulking.",
    nutrients: {
      nitrogen: "High – Necessary for early canopy development and leaf growth.",
      phosphorus: "High – Essential for tuber initiation and number.",
      potassium: "Very High – Drives tuber bulking, starch content, and shelf life."
    },
    risk: "Poor nutrition results in small tubers, low starch content, and high susceptibility to late blight."
  },
  tomato: {
    type: "Heavy feeder",
    duration: "60–80 days (after transplanting)",
    description: "Tomato plants are fast-growing and produce fruit continuously, requiring a consistent supply of nutrients. A balance between nitrogen for growth and potassium for fruit quality is essential.",
    nutrients: {
      nitrogen: "Medium – Promotes vine growth without excessive leafiness.",
      phosphorus: "Medium – Supports flower production and fruit set.",
      potassium: "High – Essential for fruit color, flavor, and firmness."
    },
    risk: "Deficiency leads to blossom end rot (with calcium), small fruits, and poor flavor profile."
  },
  onion: {
    type: "Moderate feeder",
    duration: "100–120 days",
    description: "Onion has a shallow root system, making it less efficient at nutrient uptake. It requires frequent, small applications of nutrients, especially during the bulb swelling stage.",
    nutrients: {
      nitrogen: "Medium – Critical for leaf growth before bulb initiation.",
      phosphorus: "High – Necessary for root growth and bulb size.",
      potassium: "Medium – Improves bulb firmness and storage quality."
    },
    risk: "Inadequate fertilization results in small bulbs, thick necks, and poor post-harvest storage life."
  },
  sugarcane: {
    type: "Heavy feeder",
    duration: "10–16 months",
    description: "Sugarcane is a heavy feeder crop with a long growing cycle. It requires a large amount of nutrients to produce high biomass and sugar content. Without proper fertilization, plant growth becomes weak, stalk development is poor, and sugar yield decreases significantly.",
    nutrients: {
      nitrogen: "High – Essential for vegetative growth and stalk formation.",
      phosphorus: "Medium – Supports root development and early growth.",
      potassium: "High – Improves sugar content and disease resistance."
    },
    risk: "Low fertilizer application can lead to stunted growth, reduced sugar yield, and increased susceptibility to pests and diseases."
  },
  mustard: {
    type: "Light feeder",
    duration: "100–120 days",
    description: "Mustard is an oilseed crop that is relatively efficient at nutrient uptake but responds well to sulfur and nitrogen for higher oil content and seed yield.",
    nutrients: {
      nitrogen: "Medium – Drives biomass and seed production.",
      phosphorus: "Medium – Essential for root growth and flowering.",
      potassium: "Low – Generally required in smaller amounts for water regulation."
    },
    risk: "Poor nutrition leads to fewer pods, lower oil percentage, and reduced seed weight."
  }
};
