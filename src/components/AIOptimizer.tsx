
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useState } from "react";

const AIOptimizer = () => {
  const [fitScore, setFitScore] = useState(0);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const runAnalysis = () => {
    setIsAnalyzing(true);
    setFitScore(0);
    
    // Simulate AI analysis
    const interval = setInterval(() => {
      setFitScore(prev => {
        if (prev >= 87) {
          clearInterval(interval);
          setIsAnalyzing(false);
          return 87;
        }
        return prev + Math.random() * 15;
      });
    }, 100);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            AI-Powered Resume Optimization
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get your personalized Tech-Stack Fit Score and optimize your resume 
            for maximum impact with our advanced AI algorithms.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Card className="p-8 bg-white shadow-xl border-0">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Upload Your Resume</h3>
              
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-primary transition-colors cursor-pointer">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  </svg>
                </div>
                <p className="text-gray-600 mb-2">Drag & drop your resume here</p>
                <p className="text-sm text-gray-400">PDF, DOC, DOCX up to 10MB</p>
              </div>

              <Button 
                onClick={runAnalysis}
                disabled={isAnalyzing}
                className="w-full mt-6 bg-primary hover:bg-primary/90 text-white py-3"
              >
                {isAnalyzing ? 'Analyzing...' : 'Analyze Resume'}
              </Button>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="p-8 bg-gradient-to-br from-primary/5 to-accent/5 border-0 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Tech-Stack Fit Score</h3>
              
              <div className="text-center mb-8">
                <div className="text-6xl font-bold text-primary mb-2">
                  {Math.round(fitScore)}
                </div>
                <div className="text-gray-600">out of 100</div>
              </div>

              <Progress value={fitScore} className="h-3 mb-6" />

              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Technical Skills Match</span>
                  <span className="font-semibold text-secondary">92%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Experience Relevance</span>
                  <span className="font-semibold text-accent">85%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Industry Keywords</span>
                  <span className="font-semibold text-primary">78%</span>
                </div>
              </div>
            </Card>

            {fitScore > 0 && (
              <Card className="p-6 bg-white border-l-4 border-l-secondary shadow-lg animate-fade-in">
                <h4 className="font-semibold text-secondary mb-2">✓ Optimization Suggestions</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Add React Native to mobile development section</li>
                  <li>• Quantify your cloud infrastructure achievements</li>
                  <li>• Include more industry-specific terminology</li>
                </ul>
              </Card>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIOptimizer;
