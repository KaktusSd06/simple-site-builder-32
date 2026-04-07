import { Leaf } from "lucide-react";

const Footer = () => (
  <footer className="bg-foreground text-background py-8">
    <div className="container mx-auto px-4 text-center">
      <div className="flex items-center justify-center gap-2 mb-4">
        <Leaf className="w-5 h-5" />
        <span className="font-serif font-semibold">МікроЗелень</span>
      </div>
      <p className="text-sm opacity-70">
        © {new Date().getFullYear()} МікроЗелень — Хмельницький. Свіжість з теплиці на ваш стіл.
      </p>
    </div>
  </footer>
);

export default Footer;
