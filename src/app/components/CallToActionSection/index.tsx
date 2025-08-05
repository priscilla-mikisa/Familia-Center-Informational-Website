'use client';

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-green-600 to-green-700">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
          Find the Right Support for Your Family
        </h2>
        <p className="text-xl text-green-100 mb-8">
          Get started with confidence - all first-time participants receive a free consultation.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-4 bg-white text-green-600 rounded-lg hover:bg-gray-50 font-medium shadow-md">
            Browse Programs
          </button>
          <button className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-green-600 font-medium">
            Free 15-Min Consultation
          </button>
        </div>
        <div className="mt-8 flex flex-wrap justify-center gap-6 text-green-100 text-sm">
          <div className="flex items-center">
            <span className="mr-2">✓</span> No long-term commitment
          </div>
          <div className="flex items-center">
            <span className="mr-2">✓</span> Faith-based approach
          </div>
          <div className="flex items-center">
            <span className="mr-2">✓</span> Cancel anytime
          </div>
        </div>
      </div>
    </section>
  );
}
export default CTA;