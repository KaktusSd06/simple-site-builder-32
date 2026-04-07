import { Heart, Leaf, MapPin, Sun } from "lucide-react";
import data from "@/data/microgreens.json";

const features = [
  { icon: Leaf, title: "Натуральне вирощування", desc: "Без пестицидів та хімікатів" },
  { icon: Sun, title: "Спеціальні теплиці", desc: "Оптимальне освітлення та температура" },
  { icon: Heart, title: "З любов'ю", desc: "Кожна рослина отримує увагу" },
  { icon: MapPin, title: data.about.city, desc: "Свіжість з вашого міста" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Про нас</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Привіт! Мене звати <span className="text-primary font-semibold">{data.about.name}</span>, і я вирощую
            мікрозелень у промислових масштабах у місті {data.about.city}. Мої рослини розвиваються
            у спеціальних теплицях і готові прикрасити та урізноманітнити ваш щоденний чи святковий стіл.
          </p>
          <p className="text-base text-muted-foreground mt-4 leading-relaxed">
            {data.about.mission}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div key={f.title} className="flex flex-col items-center text-center p-6 rounded-xl bg-background border hover:border-primary/50 hover:shadow-md transition-all duration-300">
              <f.icon className="w-10 h-10 text-primary mb-4" />
              <h3 className="font-semibold text-foreground mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
