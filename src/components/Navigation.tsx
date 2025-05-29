
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md border-b border-gray-200 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">J</span>
            </div>
            <span className="font-bold text-xl text-gray-900">JITTS</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-600 hover:text-primary transition-colors">Platform</a>
            <a href="#" className="text-gray-600 hover:text-primary transition-colors">Solutions</a>
            <a href="#" className="text-gray-600 hover:text-primary transition-colors">Resources</a>
            <a href="#" className="text-gray-600 hover:text-primary transition-colors">Pricing</a>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" className="text-gray-600 hover:text-primary">
              Sign In
            </Button>
            <Button className="bg-primary hover:bg-primary/90 text-white">
              Get Started
            </Button>
          </div>

          <button 
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
              <div className={`w-full h-0.5 bg-gray-600 transition-all ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
              <div className={`w-full h-0.5 bg-gray-600 transition-all ${isOpen ? 'opacity-0' : ''}`}></div>
              <div className={`w-full h-0.5 bg-gray-600 transition-all ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
            </div>
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 pb-4">
            <div className="flex flex-col space-y-4 pt-4">
              <a href="#" className="text-gray-600 hover:text-primary transition-colors">Platform</a>
              <a href="#" className="text-gray-600 hover:text-primary transition-colors">Solutions</a>
              <a href="#" className="text-gray-600 hover:text-primary transition-colors">Resources</a>
              <a href="#" className="text-gray-600 hover:text-primary transition-colors">Pricing</a>
              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="ghost" className="text-gray-600 hover:text-primary justify-start">
                  Sign In
                </Button>
                <Button className="bg-primary hover:bg-primary/90 text-white justify-start">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
