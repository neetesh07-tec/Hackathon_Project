import { Sprout } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border bg-card py-8 mt-auto">
    <div className="container text-center text-sm text-muted-foreground">
      <div className="flex items-center justify-center gap-2 mb-2">
        <Sprout className="h-4 w-4 text-primary" />
        <span className="font-heading font-semibold text-foreground">Esccot</span>
      </div>
      <p>Designed for Indian farming conditions</p>
      <p className="mt-1">Helping farmers make better fertilizer decisions</p>
    </div>
  </footer>
);

export default Footer;
