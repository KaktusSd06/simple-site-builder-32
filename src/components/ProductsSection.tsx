import data from "@/data/microgreens.json";
import ProductCard from "./ProductCard";

const ProductsSection = () => {
  const available = data.products.filter((p) => p.available);
  const comingSoon = data.products.filter((p) => !p.available);

  return (
    <section id="products" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Наша продукція</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Натискайте на картку, щоб дізнатись про смак, користь та використання кожного виду мікрозелені
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {available.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>

        {comingSoon.length > 0 && (
          <>
            <h3 className="text-2xl font-semibold text-foreground text-center mb-6">Скоро у продажу</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {comingSoon.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default ProductsSection;
