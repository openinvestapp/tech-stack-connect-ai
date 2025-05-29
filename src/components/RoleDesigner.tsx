
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

const RoleDesigner = () => {
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  
  const skillCategories = {
    "Technical": ["React", "Python", "AWS", "Docker", "GraphQL", "Node.js"],
    "Soft Skills": ["Leadership", "Communication", "Problem Solving", "Creativity"],
    "Domain": ["FinTech", "Healthcare", "E-commerce", "AI/ML", "Blockchain"]
  };

  const toggleSkill = (skill: string) => {
    setSelectedSkills(prev => 
      prev.includes(skill) 
        ? prev.filter(s => s !== skill)
        : [...prev, skill]
    );
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Hybrid Role Designer
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Create custom job roles that perfectly match your organization's needs 
            by combining different skill sets and expertise areas.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="p-8 bg-white shadow-xl border-0">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Build Your Ideal Role</h3>
              
              {Object.entries(skillCategories).map(([category, skills]) => (
                <div key={category} className="mb-8">
                  <h4 className="text-lg font-semibold text-gray-700 mb-4">{category} Skills</h4>
                  <div className="flex flex-wrap gap-3">
                    {skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant={selectedSkills.includes(skill) ? "default" : "outline"}
                        className={`cursor-pointer transition-all duration-200 hover:scale-105 ${
                          selectedSkills.includes(skill)
                            ? 'bg-primary text-white'
                            : 'hover:bg-primary/10 hover:border-primary'
                        }`}
                        onClick={() => toggleSkill(skill)}
                      >
                        {skill}
                        {selectedSkills.includes(skill) && (
                          <span className="ml-2">✓</span>
                        )}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}

              <div className="mt-8 p-6 bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-3">AI Recommendations</h4>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>• Consider adding "DevOps" for better tech stack coverage</p>
                  <p>• "Project Management" pairs well with your selected skills</p>
                  <p>• Current combination has 92% market demand</p>
                </div>
              </div>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="p-6 bg-white shadow-xl border-0">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Role Preview</h3>
              
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-gray-600">Role Title</label>
                  <div className="text-lg font-semibold text-gray-900">
                    {selectedSkills.length > 0 
                      ? `${selectedSkills.slice(0, 2).join(' & ')} Specialist`
                      : 'Custom Role'
                    }
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-600">Selected Skills ({selectedSkills.length})</label>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {selectedSkills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-600">Market Demand</span>
                    <span className="font-semibold text-secondary">High</span>
                  </div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-600">Avg. Salary Range</span>
                    <span className="font-semibold text-primary">$95K - $140K</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Available Talent</span>
                    <span className="font-semibold text-accent">1,247 candidates</span>
                  </div>
                </div>
              </div>

              <Button className="w-full mt-6 bg-primary hover:bg-primary/90 text-white">
                Create Job Posting
              </Button>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-secondary/10 to-secondary/5 border-secondary/20">
              <h4 className="font-semibold text-secondary mb-3">💡 Pro Tip</h4>
              <p className="text-sm text-gray-600">
                Hybrid roles that combine 3-5 complementary skills tend to have 
                the highest success rates and candidate satisfaction.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoleDesigner;
