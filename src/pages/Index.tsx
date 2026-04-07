import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProductsSection from "@/components/ProductsSection";
import BenefitsSection from "@/components/BenefitsSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <ProductsSection />
      <BenefitsSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
