import { useState } from "react";
import { Leaf, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Головна", href: "#hero" },
  { label: "Продукція", href: "#products" },
  { label: "Про мікрозелень", href: "#benefits" },
  { label: "Про нас", href: "#about" },
  { label: "Контакти", href: "#contact" },
];

const Header = () => {
  const [open, setOpen] = useState(false);

  const scrollTo = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <button onClick={() => scrollTo("#hero")} className="flex items-center gap-2 text-primary font-bold text-lg">
          <Leaf className="w-6 h-6" />
          <span className="font-serif">МікроЗелень</span>
        </button>

        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((l) => (
            <button key={l.href} onClick={() => scrollTo(l.href)} className="text-sm text-muted-foreground hover:text-primary transition-colors">
              {l.label}
            </button>
          ))}
        </nav>

        <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </Button>
      </div>

      {open && (
        <nav className="md:hidden bg-background border-b px-4 pb-4 flex flex-col gap-2">
          {navLinks.map((l) => (
            <button key={l.href} onClick={() => scrollTo(l.href)} className="text-left py-2 text-sm text-muted-foreground hover:text-primary transition-colors">
              {l.label}
            </button>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;
