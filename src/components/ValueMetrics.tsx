
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const ValueMetrics = () => {
  const metrics = [
    {
      title: "Technical Proficiency",
      score: 92,
      description: "Full-stack development capabilities",
      color: "text-primary",
      bgColor: "bg-primary"
    },
    {
      title: "Leadership Impact",
      score: 87,
      description: "Team management and project delivery",
      color: "text-secondary",
      bgColor: "bg-secondary"
    },
    {
      title: "Innovation Index",
      score: 94,
      description: "Creative problem-solving and ideation",
      color: "text-accent",
      bgColor: "bg-accent"
    },
    {
      title: "Market Value",
      score: 89,
      description: "Industry demand and compensation potential",
      color: "text-purple-600",
      bgColor: "bg-purple-600"
    }
  ];

  const achievements = [
    { title: "Revenue Generated", value: "$2.4M", period: "Last 24 months" },
    { title: "Cost Savings", value: "$450K", period: "Process optimization" },
    { title: "Team Productivity", value: "+35%", period: "Under leadership" },
    { title: "Client Satisfaction", value: "98.5%", period: "Average rating" }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Value Quantification Dashboard
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform subjective evaluations into objective metrics that showcase 
            real business impact and professional growth potential.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Core Competency Scores</h3>
            
            {metrics.map((metric, index) => (
              <Card key={metric.title} className="p-6 bg-gray-50 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex justify-between items-center mb-3">
                  <h4 className="font-semibold text-gray-900">{metric.title}</h4>
                  <span className={`text-2xl font-bold ${metric.color}`}>{metric.score}</span>
                </div>
                <Progress 
                  value={metric.score} 
                  className="h-3 mb-3"
                />
                <p className="text-sm text-gray-600">{metric.description}</p>
              </Card>
            ))}

            <Card className="p-6 bg-gradient-to-r from-primary/5 to-accent/5 border-0 shadow-lg">
              <h4 className="font-semibold text-gray-900 mb-3">Overall Professional Rating</h4>
              <div className="text-center">
                <div className="text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                  9.1
                </div>
                <div className="text-gray-600">out of 10</div>
                <div className="text-sm text-secondary mt-2">Top 5% in your field</div>
              </div>
            </Card>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Quantified Achievements</h3>
            
            <div className="grid grid-cols-1 gap-6">
              {achievements.map((achievement, index) => (
                <Card key={achievement.title} className="p-6 bg-white border-l-4 border-l-primary shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{achievement.title}</h4>
                      <p className="text-sm text-gray-600">{achievement.period}</p>
                    </div>
                    <div className="text-2xl font-bold text-primary">{achievement.value}</div>
                  </div>
                </Card>
              ))}
            </div>

            <Card className="p-6 bg-gradient-to-br from-secondary/10 to-secondary/5 border-secondary/20 shadow-lg">
              <h4 className="font-semibold text-secondary mb-4">Career Trajectory</h4>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Current Level</span>
                  <span className="font-semibold">Senior Developer</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Next Milestone</span>
                  <span className="font-semibold text-primary">Tech Lead</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Estimated Timeline</span>
                  <span className="font-semibold text-accent">8-12 months</span>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-to-r from-accent/10 to-primary/10 border-0 shadow-lg">
              <h4 className="font-semibold text-gray-900 mb-3">🎯 Growth Opportunities</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Complete AWS Solutions Architect certification</li>
                <li>• Lead cross-functional project team</li>
                <li>• Develop expertise in machine learning applications</li>
                <li>• Mentor junior developers (2-3 team members)</li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueMetrics;
