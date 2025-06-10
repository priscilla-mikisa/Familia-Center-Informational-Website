'use client';
import { Heart, Monitor, Shield, UserCheck } from "lucide-react";


const About = () => {

  
  return (
    <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium mb-6">
                About Familia Center
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                We want families and individuals to thrive through professional support.
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                And we do our best to make that happen through innovative technology and compassionate care.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Secure & Private</h3>
                    <p className="text-gray-600">End-to-end encryption and strict privacy controls protect your personal information and counseling sessions.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <UserCheck className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Professional Counselors</h3>
                    <p className="text-gray-600">Licensed mental health professionals with expertise in family counseling, relationships, and personal development.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Monitor className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Accessible Technology</h3>
                    <p className="text-gray-600">Online platform accessible from any device, making professional counseling available anytime, anywhere.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                  <p className="text-gray-600 mb-6">
                    To make professional counseling and mental health support accessible, affordable, and effective for families everywhere through innovative technology and compassionate care.
                  </p>
                  <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-200">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">1000+</div>
                      <div className="text-sm text-gray-500">Families Helped</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">50+</div>
                      <div className="text-sm text-gray-500">Counselors</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">24/7</div>
                      <div className="text-sm text-gray-500">Support</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}
export default About;