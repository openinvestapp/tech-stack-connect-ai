
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import AIOptimizer from "@/components/AIOptimizer";
import RoleDesigner from "@/components/RoleDesigner";
import Marketplace from "@/components/Marketplace";
import ValueMetrics from "@/components/ValueMetrics";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <section id="hero">
        <Hero />
      </section>
      <section id="platform">
        <AIOptimizer />
        <RoleDesigner />
      </section>
      <section id="marketplace">
        <Marketplace />
      </section>
      <ValueMetrics />
      <Footer />
    </div>
  );
};

export default Index;
