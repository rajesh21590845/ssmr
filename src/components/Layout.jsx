import React from 'react';
import Header from './Header';
import ProductGallery from './ProductGallery';
import SeeMoreButton from './SeeMoreButton';
import Footer from './Footer';

const Layout = () => {
  return (
    <div style={{ width: '100%', minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#f5f5f5' }}>
      {/* Header Section */}
      <div style={{ flexGrow: 0 }}>
        <Header />
      </div>

      {/* Product Gallery Section */}
      <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', padding: '40px 0' }}>
        <ProductGallery />
      </div>

      {/* See More Button */}
      <div style={{ flexGrow: 0, display: 'flex', justifyContent: 'center', padding: '20px 0', backgroundColor: '#d4ff00' }}>
        <SeeMoreButton />
      </div>

      {/* Footer Section */}
      <div style={{ flexGrow: 0 }}>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;