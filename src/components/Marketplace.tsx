
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Marketplace = () => {
  const userTypes = [
    {
      title: "Job Seekers",
      description: "Find your perfect role with AI-powered matching and personalized career guidance.",
      icon: "👥",
      features: ["Resume Optimization", "Skill Gap Analysis", "Career Roadmaps", "Interview Prep"],
      color: "from-primary/10 to-primary/5",
      borderColor: "border-primary/20",
      buttonColor: "bg-primary hover:bg-primary/90"
    },
    {
      title: "Employers",
      description: "Access top talent and design hybrid roles that perfectly fit your organization.",
      icon: "🏢",
      features: ["Role Designer", "Talent Pipeline", "Skills Assessment", "Team Analytics"],
      color: "from-secondary/10 to-secondary/5",
      borderColor: "border-secondary/20",
      buttonColor: "bg-secondary hover:bg-secondary/90"
    },
    {
      title: "Skill Coaches",
      description: "Empower professionals with targeted skill development and certification paths.",
      icon: "🎓",
      features: ["Curriculum Builder", "Progress Tracking", "Certification Prep", "Mentorship Tools"],
      color: "from-accent/10 to-accent/5",
      borderColor: "border-accent/20",
      buttonColor: "bg-accent hover:bg-accent/90"
    },
    {
      title: "Certifiers",
      description: "Validate skills and provide industry-recognized credentials to professionals.",
      icon: "🏆",
      features: ["Assessment Platform", "Digital Badges", "Skill Verification", "Industry Standards"],
      color: "from-purple-100/50 to-purple-50",
      borderColor: "border-purple-200",
      buttonColor: "bg-purple-600 hover:bg-purple-700"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Four-Sided Talent Ecosystem
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our comprehensive platform brings together all stakeholders in the talent marketplace, 
            creating unprecedented value for everyone involved.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {userTypes.map((userType, index) => (
            <Card 
              key={userType.title}
              className={`p-6 bg-gradient-to-br ${userType.color} border ${userType.borderColor} hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="text-center mb-4">
                <div className="text-4xl mb-3">{userType.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{userType.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{userType.description}</p>
              </div>

              <div className="space-y-2 mb-6">
                {userType.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center text-sm text-gray-700">
                    <div className="w-2 h-2 bg-gradient-to-r from-primary to-accent rounded-full mr-3"></div>
                    {feature}
                  </div>
                ))}
              </div>

              <Button className={`w-full text-white ${userType.buttonColor}`}>
                Learn More
              </Button>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Card className="p-8 bg-gradient-to-r from-primary/5 via-accent/5 to-secondary/5 border-0 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Network Effect in Action
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              As our ecosystem grows, the value increases exponentially for all participants. 
              More connections mean better matches, faster skill development, and higher success rates.
            </p>
            <div className="flex justify-center space-x-8 text-center">
              <div>
                <div className="text-3xl font-bold text-primary">4X</div>
                <div className="text-sm text-gray-600">Faster Hiring</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-secondary">60%</div>
                <div className="text-sm text-gray-600">Skill Improvement</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent">95%</div>
                <div className="text-sm text-gray-600">Satisfaction Rate</div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Marketplace;
