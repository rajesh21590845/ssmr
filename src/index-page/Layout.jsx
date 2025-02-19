import React from 'react';
import NavigationBar from './NavigationBar';
import HeroSection_WhyChooseUs from './HeroSection_WhyChooseUs';
import ExperienceSection from './ExperienceSection';
import ProductsSection from './ProductsSection';

const Layout = () => {
  return (
    <div style={{ width: '100%', minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#f5f5f5' }}>
      <div style={{ flexGrow: 1 }}>
        <NavigationBar />
      </div>
      <div style={{ flexGrow: 2, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <HeroSection_WhyChooseUs />
      </div>
      <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: '#aaff00' }}>
        <ExperienceSection />
      </div>
      <div style={{ flexGrow: 3, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: '#ffffff' }}>
        <ProductsSection />
      </div>
    </div>
  );
};

export default Layout;