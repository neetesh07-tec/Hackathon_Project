import { Link, useLocation } from "react-router-dom";
import { Sprout } from "lucide-react";
import logo from "@/assets/agrismart-logo.png";

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="border-b border-border bg-card/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="AgriSmart" className="h-10 w-10 rounded-lg" />
          <div className="leading-tight">
            <span className="font-heading font-bold text-primary text-lg">AgriSmart</span>
            <span className="block text-[10px] text-muted-foreground leading-none">Fertilizer Recommendations</span>
          </div>
        </Link>
        <div className="flex items-center gap-6">
          <Link
            to="/"
            className={`text-sm font-medium transition-colors ${location.pathname === "/" ? "text-primary" : "text-muted-foreground hover:text-foreground"}`}
          >
            Home
          </Link>
          <Link
            to="/recommend"
            className={`text-sm font-medium transition-colors ${location.pathname === "/recommend" ? "text-primary" : "text-muted-foreground hover:text-foreground"}`}
          >
            Get Recommendation
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
