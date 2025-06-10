'use client';

import Header from './components/Header';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import Features from './components/FeaturesSection';
import About from './components/About';
import CTA from './components/CallToActionSection';
import Programs from './components/ProgramsSection';
import Types from './components/UsersOptions';

const FamiliaCenterWebsite = () => {

  return (
    <div className="min-h-screen bg-white">

      {/* Header */}
      <Header/>
            
      {/* Hero Section */}
      <HeroSection/>

      {/* Features Section */}
      <Features/>

      {/* Programs Section */}
      <Programs/>

      {/* User OPtions */}
      <Types/>
      {/* About Section */}
      <About/>

      {/* CTA Section */}
      <CTA/>

      {/* Footer */}
      <Footer/>

    </div>
  );
};

export default FamiliaCenterWebsite;