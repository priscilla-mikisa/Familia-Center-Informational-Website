'use client';

const CTA = () => {

  
  return (
    <section className="py-20 bg-gradient-to-r from-green-600 to-green-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Join thousands of families who have found support, healing, and growth through our platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-green-600 rounded-lg hover:bg-gray-50 font-medium">
              Get Started Today
            </button>
            <button className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-green-600 font-medium">
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>

  );
}
export default CTA;