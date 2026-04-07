import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

interface Product {
  id: string;
  name: string;
  nameEn: string;
  emoji: string;
  available: boolean;
  description: string;
  benefits: string[];
  taste: string;
  usage: string[];
}

const ProductCard = ({ product }: { product: Product }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="perspective-1000 cursor-pointer group"
      onClick={() => setFlipped(!flipped)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && setFlipped(!flipped)}
    >
      <div
        className={`relative w-full transition-transform duration-500 transform-style-3d ${flipped ? "rotate-y-180" : ""}`}
        style={{ minHeight: "320px" }}
      >
        {/* Front */}
        <Card className={`absolute inset-0 backface-hidden border-2 transition-all duration-300 ${
          product.available
            ? "hover:border-primary hover:shadow-lg hover:shadow-primary/10"
            : "opacity-60 border-dashed"
        }`}>
          <CardContent className="flex flex-col items-center justify-center h-full p-6 text-center gap-4">
            <span className="text-6xl">{product.emoji}</span>
            <div>
              <h3 className="text-xl font-semibold text-foreground">{product.name}</h3>
              <p className="text-xs text-muted-foreground">{product.nameEn}</p>
            </div>
            <p className="text-sm text-muted-foreground">{product.description}</p>
            <Badge variant={product.available ? "default" : "secondary"}>
              {product.available ? "✓ В наявності" : "Скоро"}
            </Badge>
            <p className="text-xs text-muted-foreground mt-2">Натисніть, щоб дізнатись більше →</p>
          </CardContent>
        </Card>

        {/* Back */}
        <Card className="absolute inset-0 backface-hidden rotate-y-180 bg-primary text-primary-foreground border-primary">
          <CardContent className="flex flex-col justify-center h-full p-6 gap-4">
            <h3 className="text-xl font-semibold">{product.name}</h3>
            <div>
              <p className="text-sm font-medium mb-1">🍽️ Смак: {product.taste}</p>
            </div>
            <div>
              <p className="text-sm font-medium mb-2">💪 Корисні речовини:</p>
              <div className="flex flex-wrap gap-1">
                {product.benefits.map((b) => (
                  <span key={b} className="bg-primary-foreground/20 text-xs px-2 py-1 rounded-full">{b}</span>
                ))}
              </div>
            </div>
            <div>
              <p className="text-sm font-medium mb-2">🥗 Використання:</p>
              <div className="flex flex-wrap gap-1">
                {product.usage.map((u) => (
                  <span key={u} className="bg-primary-foreground/20 text-xs px-2 py-1 rounded-full">{u}</span>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ProductCard;
