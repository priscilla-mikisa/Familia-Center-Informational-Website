'use client';
import { CheckCircle } from "lucide-react";

const Types = () => {
    const userTypes = [
        {
          title: "Individuals & Couples",
          features: [
            "Access to 6-week structured programs",
            "One-time counseling sessions",
            "Live sessions via Google Meet",
            "Recorded session playback",
            "Topic selection (Parenting, Marriage, etc.)",
            "Session reminders & notifications"
          ]
        },
        {
          title: "Counselors & Experts",
          features: [
            "Professional dashboard",
            "Session management tools",
            "Google Meet integration",
            "Resource upload capabilities",
            "Progress tracking & notes",
            "Client assignment management"
          ]
        },
        {
          title: "Administrators",
          features: [
            "Complete platform oversight",
            "User & counselor management",
            "Program creation & publishing",
            "Payment & subscription control",
            "Activity logs & analytics",
            "System configuration"
          ]
        }
      ];
    
      

  return (
    <section className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
          Designed for Everyone
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Our platform serves different user types with customized experiences and role-based access to ensure the best possible counseling experience.
        </p>
      </div>
    
      <div className="grid lg:grid-cols-3 gap-8">
        {userTypes.map((userType, index) => (
          <div key={index} className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">{userType.title}</h3>
            <ul className="space-y-3">
              {userType.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
    </section>
  );
}
export default Types;

