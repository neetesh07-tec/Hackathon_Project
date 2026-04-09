import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cropInsights } from '@/data/cropInsights';
import { Info, Clock, Droplets, AlertTriangle } from 'lucide-react';

interface CropInsightsProps {
  cropValue: string;
  reasons?: string[];
}

const CropInsights: React.FC<CropInsightsProps> = ({ cropValue, reasons }) => {
  const insight = cropInsights[cropValue];

  if (!insight) return null;

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Heavy feeder': return 'bg-red-100 text-red-800 border-red-200';
      case 'Moderate feeder': return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'Light feeder': return 'bg-green-100 text-green-800 border-green-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const highlightNutrient = (text: string) => {
    const [level, ...rest] = text.split(' – ');
    return (
      <div className="flex flex-col sm:flex-row sm:items-baseline gap-1">
        <span className="font-bold text-primary shrink-0">{level}</span>
        <span className="text-muted-foreground text-sm">– {rest.join(' – ')}</span>
      </div>
    );
  };

  return (
    <div className="mt-8 space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex items-center gap-2 mb-4">
        <Info className="h-5 w-5 text-primary" />
        <h2 className="text-xl font-heading font-bold">Why This Recommendation?</h2>
      </div>

      <Card className="border-border shadow-sm overflow-hidden">
        <CardHeader className="bg-muted/30 pb-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <CardTitle className="text-lg flex items-center gap-2 capitalize">
              {cropValue} Overview
            </CardTitle>
            <div className="flex items-center gap-2">
              <Badge variant="outline" className={getTypeColor(insight.type)}>
                {insight.type}
              </Badge>
              <Badge variant="secondary" className="flex items-center gap-1">
                <Clock className="h-3 w-3" />
                {insight.duration}
              </Badge>
            </div>
          </div>
        </CardHeader>
        <CardContent className="pt-6 space-y-6">
          {reasons && reasons.length > 0 && (
            <div className="p-4 rounded-lg bg-primary/5 border border-primary/10">
              <h4 className="font-bold text-sm text-primary uppercase tracking-wider mb-3">Deficit Analysis</h4>
              <ul className="space-y-2">
                {reasons.map((r, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <span className="text-leaf mt-0.5">•</span>
                    <span className="text-muted-foreground leading-relaxed">{r}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div>
            <p className="text-muted-foreground leading-relaxed">
              {insight.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-lg bg-primary/5 border border-primary/10">
              <div className="flex items-center gap-2 mb-2">
                <div className="h-2 w-2 rounded-full bg-blue-500" />
                <h4 className="font-semibold text-sm uppercase tracking-wider">Nitrogen (N)</h4>
              </div>
              {highlightNutrient(insight.nutrients.nitrogen)}
            </div>
            <div className="p-4 rounded-lg bg-primary/5 border border-primary/10">
              <div className="flex items-center gap-2 mb-2">
                <div className="h-2 w-2 rounded-full bg-purple-500" />
                <h4 className="font-semibold text-sm uppercase tracking-wider">Phosphorus (P)</h4>
              </div>
              {highlightNutrient(insight.nutrients.phosphorus)}
            </div>
            <div className="p-4 rounded-lg bg-primary/5 border border-primary/10">
              <div className="flex items-center gap-2 mb-2">
                <div className="h-2 w-2 rounded-full bg-orange-500" />
                <h4 className="font-semibold text-sm uppercase tracking-wider">Potassium (K)</h4>
              </div>
              {highlightNutrient(insight.nutrients.potassium)}
            </div>
          </div>

          <div className="flex gap-3 p-4 rounded-lg bg-destructive/5 border border-destructive/10">
            <AlertTriangle className="h-5 w-5 text-destructive shrink-0" />
            <div className="space-y-1">
              <h4 className="font-bold text-sm text-destructive uppercase tracking-wider">Risk Factors</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {insight.risk}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CropInsights;
