
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5 flex items-center">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent mb-6">
              Just In Time<br />Technology Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              The AI-powered talent ecosystem connecting job seekers, employers, 
              skill coaches, and certification providers in perfect harmony.
            </p>
          </div>
          
          <div className="animate-slide-in-left delay-300">
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg">
                Start Your Journey
              </Button>
              <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/5 px-8 py-4 text-lg">
                Explore Platform
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-16">
            <Card className="p-6 text-center bg-white/50 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="text-3xl font-bold text-primary mb-2">10K+</div>
              <div className="text-gray-600">Active Job Seekers</div>
            </Card>
            <Card className="p-6 text-center bg-white/50 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="text-3xl font-bold text-secondary mb-2">500+</div>
              <div className="text-gray-600">Partner Companies</div>
            </Card>
            <Card className="p-6 text-center bg-white/50 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="text-3xl font-bold text-accent mb-2">95%</div>
              <div className="text-gray-600">Match Success Rate</div>
            </Card>
            <Card className="p-6 text-center bg-white/50 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="text-3xl font-bold text-primary mb-2">24/7</div>
              <div className="text-gray-600">AI Support</div>
            </Card>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
