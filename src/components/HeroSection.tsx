import { ArrowDown, Sprout } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute text-6xl opacity-10 animate-float"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
              animationDelay: `${i * 0.8}s`,
              animationDuration: `${4 + i}s`,
            }}
          >
            🌱
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm mb-6 animate-fade-in">
          <Sprout className="w-4 h-4" />
          Свіжа мікрозелень з Хмельницького
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight animate-fade-in-up">
          Живі вітаміни
          <br />
          <span className="text-primary">на вашому столі</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          Мікрозелень, вирощена з любов'ю в спеціальних теплицях.
          До 40 разів більше вітамінів, ніж у дорослих рослинах!
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          <Button size="lg" className="text-base" onClick={() => document.querySelector("#products")?.scrollIntoView({ behavior: "smooth" })}>
            Переглянути продукцію
          </Button>
          <Button size="lg" variant="outline" className="text-base" onClick={() => document.querySelector("#benefits")?.scrollIntoView({ behavior: "smooth" })}>
            Дізнатись більше
          </Button>
        </div>

        <button
          onClick={() => document.querySelector("#products")?.scrollIntoView({ behavior: "smooth" })}
          className="mt-16 inline-flex animate-bounce text-muted-foreground hover:text-primary transition-colors"
        >
          <ArrowDown className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
