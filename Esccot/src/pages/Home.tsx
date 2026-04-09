import { Link } from "react-router-dom";
import { Sprout, CloudSun, BookOpen, Leaf, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: Sprout,
    title: "Soil-Based Recommendation",
    desc: "Get the right fertilizer based on your soil type and its nutrient levels.",
    bg: "bg-leaf-light",
    iconColor: "text-leaf",
  },
  {
    icon: CloudSun,
    title: "Weather-Aware Adjustments",
    desc: "Recommendations adjust for local weather so you don't waste fertilizer.",
    bg: "bg-sky-light",
    iconColor: "text-sky",
  },
  {
    icon: BookOpen,
    title: "Simple Explanations",
    desc: "We explain why each fertilizer is suggested — in plain, easy language.",
    bg: "bg-sun-light",
    iconColor: "text-sun",
  },
  {
    icon: Leaf,
    title: "Sustainable Usage Tips",
    desc: "Protect your soil for the long term with our sustainability advice.",
    bg: "bg-leaf-light",
    iconColor: "text-primary",
  },
];

const Home = () => (
  <div className="flex flex-col">
    {/* Hero */}
    <section className="py-16 md:py-24">
      <div className="container max-w-3xl text-center">
        <div className="inline-flex items-center gap-2 bg-leaf-light text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-6">
          <Sprout className="h-4 w-4" />
          For Indian Farmers
        </div>
        <h1 className="text-3xl md:text-5xl font-heading font-extrabold tracking-tight leading-tight mb-4">
          Better Fertilizer Decisions for Better Yield
        </h1>
        <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
          Get simple recommendations based on your soil, crop, and weather — no guesswork needed.
        </p>
        <Link to="/recommend">
          <Button size="lg" className="text-base px-8 gap-2">
            Get Recommendation <ArrowRight className="h-4 w-4" />
          </Button>
        </Link>
        <p className="text-xs text-muted-foreground mt-4">
          🇮🇳 Designed for Indian farming conditions
        </p>
      </div>
    </section>

    {/* Features */}
    <section className="py-12 md:py-16 bg-card">
      <div className="container">
        <h2 className="text-2xl font-heading font-bold text-center mb-10">How It Helps You</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div key={f.title} className="rounded-xl border border-border bg-background p-6 hover:shadow-md transition-shadow">
              <div className={`inline-flex items-center justify-center h-11 w-11 rounded-lg ${f.bg} mb-4`}>
                <f.icon className={`h-5 w-5 ${f.iconColor}`} />
              </div>
              <h3 className="font-heading font-semibold mb-1.5">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-14">
      <div className="container max-w-2xl text-center">
        <h2 className="text-xl font-heading font-bold mb-3">Ready to check your field?</h2>
        <p className="text-muted-foreground mb-6">It only takes a minute. Enter your details and get a recommendation.</p>
        <Link to="/recommend">
          <Button size="lg" className="gap-2">
            Start Now <ArrowRight className="h-4 w-4" />
          </Button>
        </Link>
      </div>
    </section>
  </div>
);

export default Home;
