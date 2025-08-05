'use client';
import {Award, ArrowRight, Play, Video} from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="pt-24 pb-16 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center space-x-2 bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium mb-6">
              <Award className="w-4 h-4" />
              <span>Faith-Based Family Support</span>
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              <span className="text-green-600">Grow stronger together</span> through guided programs and expert support
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Access our 3-part system: structured learning, live guidance sessions, and on-demand resources - all designed to help your family flourish.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <button className="px-8 py-4 bg-green-600 text-white rounded-lg hover:bg-green-700 font-medium flex items-center justify-center space-x-2">
                <span>Explore Programs</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="px-8 py-4 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 font-medium flex items-center justify-center space-x-2">
                <Play className="w-5 h-5" />
                <span>How It Works</span>
              </button>
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex -space-x-2">
                {[1,2,3,4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full bg-gray-200 border-2 border-white"></div>
                ))}
              </div>
              <div className="text-sm text-gray-600">
                <p>Trusted by <span className="font-medium">200+ families</span></p>
                <p className="flex items-center">
                  <span className="mr-1">⭐️⭐️⭐️⭐️⭐️</span>
                  <span>4.9/5 rating</span>
                </p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8 transform hover:scale-[1.02] transition-transform duration-300">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Video className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Three Ways We Help</h3>
                  <p className="text-sm text-gray-500">Choose what works for your family</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="mt-0.5">
                    <div className="w-5 h-5 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-xs font-bold">1</div>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Structured Programs</h4>
                    <p className="text-sm text-gray-600">6-week guided courses with weekly lessons</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="mt-0.5">
                    <div className="w-5 h-5 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-xs font-bold">2</div>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Live Guidance</h4>
                    <p className="text-sm text-gray-600">Q&A sessions with family experts</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="mt-0.5">
                    <div className="w-5 h-5 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-xs font-bold">3</div>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Resource Library</h4>
                    <p className="text-sm text-gray-600">On-demand videos and worksheets</p>
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
export default HeroSection;