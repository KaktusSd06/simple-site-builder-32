import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import data from "@/data/microgreens.json";

const vitamins = [
  { name: "Мікрозелень", c: 95, a: 90, k: 85, iron: 80 },
  { name: "Дорослі рослини", c: 30, a: 25, k: 20, iron: 22 },
];

const Bar = ({ value, label, delay }: { value: number; label: string; delay: number }) => (
  <div className="flex items-center gap-3">
    <span className="text-sm text-muted-foreground w-28 text-right">{label}</span>
    <div className="flex-1 bg-muted rounded-full h-6 overflow-hidden">
      <div
        className="h-full bg-primary rounded-full transition-all duration-1000 ease-out flex items-center justify-end pr-2"
        style={{ width: `${value}%`, transitionDelay: `${delay}ms` }}
      >
        <span className="text-xs text-primary-foreground font-medium">{value}%</span>
      </div>
    </div>
  </div>
);

const BenefitsSection = () => {
  const [factIndex, setFactIndex] = useState(0);

  const nextFact = () => {
    setFactIndex((prev) => (prev + 1) % data.facts.length);
  };

  return (
    <section id="benefits" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Чому мікрозелень?</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Дізнайтесь, чому мікрозелень — це суперфуд майбутнього
          </p>
        </div>

        <Tabs defaultValue="compare" className="max-w-3xl mx-auto">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="compare">📊 Порівняння</TabsTrigger>
            <TabsTrigger value="facts">💡 Цікаві факти</TabsTrigger>
          </TabsList>

          <TabsContent value="compare" className="mt-6">
            <Card>
              <CardContent className="p-6 space-y-6">
                <p className="text-sm text-muted-foreground text-center mb-4">
                  Вміст корисних речовин: мікрозелень vs дорослі рослини
                </p>
                {["c", "a", "k", "iron"].map((key, i) => (
                  <div key={key} className="space-y-2">
                    <p className="text-sm font-medium text-foreground">
                      {key === "c" ? "Вітамін C" : key === "a" ? "Вітамін A" : key === "k" ? "Вітамін K" : "Залізо"}
                    </p>
                    {vitamins.map((v) => (
                      <Bar
                        key={v.name}
                        value={v[key as keyof typeof v] as number}
                        label={v.name}
                        delay={i * 200}
                      />
                    ))}
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="facts" className="mt-6">
            <Card className="min-h-[300px] flex items-center justify-center">
              <CardContent className="p-8 text-center">
                <p className="text-5xl mb-6">🌿</p>
                <p className="text-xl md:text-2xl font-medium text-foreground mb-8 leading-relaxed">
                  "{data.facts[factIndex]}"
                </p>
                <button
                  onClick={nextFact}
                  className="px-6 py-3 bg-primary text-primary-foreground rounded-full text-sm font-medium hover:bg-primary/90 transition-colors"
                >
                  Наступний факт →
                </button>
                <p className="text-xs text-muted-foreground mt-4">
                  {factIndex + 1} / {data.facts.length}
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default BenefitsSection;
