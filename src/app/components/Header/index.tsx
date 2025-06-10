'use client';
import { useState } from 'react';
import {Menu,X} from 'lucide-react';
import Image from "next/image";


const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

  
  return (
    <header className="bg-white shadow-sm fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-green-600 rounded-lg flex items-center justify-center">
                <Image
                src='/images/logo.png'
                  alt='logo'
                  width={50}
                  height={50}
                  className="text-white" 
                 />
              </div>
              <span className="text-xl font-bold text-gray-900">Familia Center</span>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a href="#home" className="text-green-600 font-medium">Home</a>
              <a href="#about" className="text-gray-700 hover:text-green-600">About</a>
              <a href="#programs" className="text-gray-700 hover:text-green-600">Programs</a>
              <a href="#features" className="text-gray-700 hover:text-green-600">Features</a>
              <a href="#contact" className="text-gray-700 hover:text-green-600">Contact</a>
            </nav>

            <div className="hidden md:flex space-x-4">
              <button className="px-4 py-2 text-green-600 border border-green-600 rounded-lg hover:bg-green-50">
                Sign In
              </button>
              <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
                Get Started
              </button>
            </div>

            {/* Mobile menu button */}
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 py-2 space-y-2">
              <a href="#home" className="block py-2 text-green-600 font-medium">Home</a>
              <a href="#about" className="block py-2 text-gray-700">About</a>
              <a href="#programs" className="block py-2 text-gray-700">Programs</a>
              <a href="#features" className="block py-2 text-gray-700">Features</a>
              <a href="#contact" className="block py-2 text-gray-700">Contact</a>
              <div className="pt-4 space-y-2">
                <button className="w-full px-4 py-2 text-green-600 border border-green-600 rounded-lg">
                  Sign In
                </button>
                <button className="w-full px-4 py-2 bg-green-600 text-white rounded-lg">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        )}
      </header>
  );
}
export default Header;