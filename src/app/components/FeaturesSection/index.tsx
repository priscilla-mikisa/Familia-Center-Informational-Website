'use client';
import { BookOpen, Shield, Users, Video, Download, Lock } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <BookOpen className="w-5 h-5" />,
      title: "Structured Programs",
      description: "6-12 week guided courses with weekly lessons and exercises",
      type: "Educational"
    },
    {
      icon: <Video className="w-5 h-5" />,
      title: "Live Guidance Sessions",
      description: "Interactive Q&A with family experts via secure video",
      type: "Interactive"  
    },
    {
      icon: <Download className="w-5 h-5" />,
      title: "Resource Library",
      description: "On-demand videos, worksheets, and reading materials",
      type: "Self-Paced"
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: "Multiple Formats",
      description: "Choose between self-study, group cohorts, or private sessions",
      type: "Flexible"
    },
    {
      icon: <Shield className="w-5 h-5" />,
      title: "Faith-Based Approach",
      description: "Biblical principles integrated with professional expertise",
      type: "Spiritual"
    },
    {
      icon: <Lock className="w-5 h-5" />,
      title: "Complete Privacy",
      description: "Anonymous participation options available",
      type: "Secure"
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Our Comprehensive Support Platform
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Designed to meet families wherever they are in their journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow hover:border-green-100">
              <div className="flex items-start space-x-4">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                  feature.type === "Educational" ? "bg-blue-100 text-blue-600" :
                  feature.type === "Interactive" ? "bg-purple-100 text-purple-600" :
                  feature.type === "Spiritual" ? "bg-green-100 text-green-600" :
                  "bg-gray-100 text-gray-600"
                }`}>
                  {feature.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                  <span className={`inline-block mt-2 text-xs px-2 py-1 rounded-full ${
                    feature.type === "Educational" ? "bg-blue-50 text-blue-600" :
                    feature.type === "Interactive" ? "bg-purple-50 text-purple-600" :
                    feature.type === "Spiritual" ? "bg-green-50 text-green-600" :
                    "bg-gray-50 text-gray-600"
                  }`}>
                    {feature.type}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Features;