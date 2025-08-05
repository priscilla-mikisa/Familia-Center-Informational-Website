'use client';
import Image from "next/image";


const Footer = () => {

  
  return (
    <footer className="bg-gray-900 text-white py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
              <Image
              src='/images/logo.png'
              alt='logo'
               width={50}
               height={50}
               />
            </div>
            <span className="text-xl font-bold">Familia Center</span>
          </div>
          <p className="text-gray-400 mb-4">
            Professional counseling and educational services through our secure online platform.
          </p>
        </div>
        
        <div>
          <h3 className="font-semibold mb-4">Platform</h3>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-white">Live Sessions</a></li>
            <li><a href="#" className="hover:text-white">Programs</a></li>
            <li><a href="#" className="hover:text-white">Resources</a></li>
            <li><a href="#" className="hover:text-white">Support</a></li>
          </ul>
        </div>
        
        <div>
          <h3 className="font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-white">About Us</a></li>
            <li><a href="#" className="hover:text-white">Counselors</a></li>
            <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white">Terms of Service</a></li>
          </ul>
        </div>
        
        <div>
          <h3 className="font-semibold mb-4">Contact</h3>
          <ul className="space-y-2 text-gray-400">
            <li>support@familiacenter.com</li>
            <li>+254 754235890</li>
            <li>24/7 Support Available</li>
          </ul>
        </div>
      </div>
      
      <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
        <p>&copy; 2025 Familia Center Platform. All rights reserved.</p>
      </div>
    </div>
  </footer>
  );
}
export default Footer;