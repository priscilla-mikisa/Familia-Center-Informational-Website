'use client';

import { BookOpen, Calendar, Cloud, Shield, Users, Video } from "lucide-react";


const Features = () => {
    const features = [
        {
          icon: <Video className="w-6 h-6" />,
          title: "Live & Recorded Sessions",
          description: "Join live counseling sessions via Google Meet or access recorded sessions anytime with proper access control."
        },
        {
          icon: <Users className="w-6 h-6" />,
          title: "Multiple User Types",
          description: "Tailored experiences for individuals, couples, and anonymous users with customized dashboards."
        },
        {
          icon: <Calendar className="w-6 h-6" />,
          title: "Session Booking",
          description: "Easy scheduling system with counselor selection, payment processing, and automated reminders."
        },
        {
          icon: <Shield className="w-6 h-6" />,
          title: "Private & Anonymous",
          description: "Secure, encrypted platform with options for complete anonymity and privacy protection."
        },
        {
          icon: <Cloud className="w-6 h-6" />,
          title: "Cloud-Based Access",
          description: "Access your sessions and content from any device, anywhere with secure cloud storage."
        },
        {
          icon: <BookOpen className="w-6 h-6" />,
          title: "Teaching Modules",
          description: "Structured 6-week programs with progress tracking, assignments, and downloadable resources."
        }
      ];
  
  return (
    <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Counseling Platform
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our platform combines cutting-edge technology with professional counseling services to provide accessible, secure, and effective mental health support.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center text-green-600 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
  );
}
export default Features;