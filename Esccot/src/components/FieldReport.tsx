import { Sprout, BarChart3, CloudSun, Brain, Globe, Lightbulb, ShieldCheck } from "lucide-react";
import { RecommendationData } from "@/pages/Recommend";

interface Props {
  data: RecommendationData;
}

const StatusBadge = ({ level }: { level: string }) => {
  const colors: Record<string, string> = {
    Low: "bg-destructive/10 text-destructive",
    Medium: "bg-sun-light text-sun",
    Good: "bg-leaf-light text-leaf",
  };
  return (
    <span className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-medium ${colors[level] || ""}`}>
      {level}
    </span>
  );
};

const SustainabilityBar = ({ score }: { score: number }) => {
  const color = score >= 80 ? "bg-leaf" : score >= 50 ? "bg-sun" : "bg-destructive";
  const label = score >= 80 ? "Safe for Soil ✅" : score >= 50 ? "Moderate Use" : "Risky for Soil";
  
  return (
    <div>
      <div className="flex justify-between text-sm mb-1.5">
        <span className="text-muted-foreground font-medium">{label}</span>
        <span className="font-semibold">{score}/100</span>
      </div>
      <div className="h-3 rounded-full bg-muted overflow-hidden">
        <div className={`h-full rounded-full transition-all duration-700 ${color}`} style={{ width: `${score}%` }} />
      </div>
      <p className="text-xs text-muted-foreground mt-3 leading-relaxed">
        Using the right amount of fertilizer helps protect soil health and improve long-term yield.
      </p>
    </div>
  );
};

const Card = ({ icon: Icon, title, iconBg, children }: { icon: any; title: string; iconBg: string; children: React.ReactNode }) => (
  <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
    <div className="flex items-center gap-3 mb-4">
      <div className={`h-9 w-9 rounded-lg flex items-center justify-center ${iconBg}`}>
        <Icon className="h-4.5 w-4.5" />
      </div>
      <h3 className="font-heading font-semibold">{title}</h3>
    </div>
    {children}
  </div>
);

const FieldReport = ({ data }: Props) => (
  <div>
    <h2 className="text-xl md:text-2xl font-heading font-bold text-center mb-6">📋 Your Field Report</h2>

    <div className="grid gap-5">
      {/* Fertilizer Rec */}
      <Card icon={Sprout} title="Recommended Fertilizer Plan" iconBg="bg-leaf-light text-leaf">
        <div className="space-y-3">
          <div className="flex justify-between items-center border-b border-border/50 pb-2">
            <span className="text-sm text-muted-foreground">Fertilizer Type</span>
            <span className="font-bold text-sm text-primary">{data.fertilizer}</span>
          </div>
          
          <div className="space-y-1">
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Fertilizer per Acre</span>
              <span className="font-bold text-sm">{data.quantityPerAcre}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Total Fertilizer Needed</span>
              <span className="font-bold text-sm text-leaf">{data.totalQuantity}</span>
            </div>
            <p className="text-[11px] text-muted-foreground italic text-right">
              * Based on your total land area
            </p>
          </div>
        </div>
      </Card>

      {/* Soil */}
      <Card icon={BarChart3} title="Soil Condition" iconBg="bg-sun-light text-earth">
        <div className="space-y-2.5">
          {Object.entries(data.soil).map(([key, val]) => (
            <div key={key} className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground capitalize">{key}</span>
              <StatusBadge level={val} />
            </div>
          ))}
        </div>
      </Card>

      {/* Weather */}
      <Card icon={CloudSun} title="Weather Info" iconBg="bg-sky-light text-sky">
        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="text-sm text-muted-foreground">Temperature</span>
            <span className="font-medium text-sm">{data.weather.temperature}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm text-muted-foreground">Rainfall</span>
            <span className="font-medium text-sm">{data.weather.rainfall}</span>
          </div>
        </div>
        <p className="text-xs text-muted-foreground mt-3 italic">⚠️ Weather conditions may affect fertilizer efficiency</p>
      </Card>

      {/* Why */}
      <Card icon={Brain} title="Why This Recommendation?" iconBg="bg-leaf-light text-primary">
        <ul className="space-y-2">
          {data.reasons.map((r, i) => (
            <li key={i} className="flex items-start gap-2 text-sm">
              <span className="text-leaf mt-0.5">•</span>
              <span>{r}</span>
            </li>
          ))}
        </ul>
      </Card>

      {/* Sustainability */}
      <Card icon={ShieldCheck} title="Soil Safety Level" iconBg="bg-leaf-light text-leaf">
        <SustainabilityBar score={data.safetyLevel} />
      </Card>

      {/* Tips */}
      <Card icon={Lightbulb} title="Tips for Best Results" iconBg="bg-sun-light text-sun">
        <ul className="space-y-2">
          {data.tips.map((t, i) => (
            <li key={i} className="flex items-start gap-2 text-sm">
              <span className="text-sun mt-0.5">💡</span>
              <span>{t}</span>
            </li>
          ))}
        </ul>
      </Card>
    </div>
  </div>
);

export default FieldReport;
