'use client';
import {Award, ArrowRight, Play, Video, CheckCircle} from 'lucide-react';


const HeroSection = () => {
  
  return (
    <section id="home" className="pt-20 pb-16 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium mb-6">
                <Award className="w-4 h-4" />
                <span>Helping Families Thrive, Not Just Survive</span>
              </div>
              
             <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
             <span className="text-green-600">Boost family</span> growth with learning,{' '}expert support, and personalized guidance — all in one place.             
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Familia Center provides upcoming families with clear Godly purpose, existing families with cherished strength and struggling families with lasting healing.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-4 bg-green-600 text-white rounded-lg hover:bg-green-700 font-medium flex items-center justify-center space-x-2">
                  <span>Start Your Journey</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className="px-8 py-4 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 font-medium flex items-center justify-center space-x-2">
                  <Play className="w-5 h-5" />
                  <span>Watch Demo</span>
                </button>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Video className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Live Session</h3>
                    <p className="text-sm text-gray-500">Professional Family Support</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Secure & Private</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Educational Resources</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Recorded for Later Access</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

  );
}
export default HeroSection;