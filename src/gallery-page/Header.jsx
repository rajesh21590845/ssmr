import React from 'react';

const Header = () => {
  return (
    <div 
      style={{ 
        width: '100%', 
        minWidth: '1024px', 
        position: 'relative', 
        backgroundColor: '#00def6', 
        overflow: 'hidden' 
      }}
    >
      {/* Background Image */}
      <div 
        style={{
          position: 'absolute',
          top: '0px',
          left: '-137px',
          width: 'auto',
          height: '100%',
          backgroundImage: 'url("/images/vector 1.png")', // Replace with actual URL
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          zIndex: 0,
        }}
      />

      {/* Content Section */}
      <div 
        style={{ 
          width: '100%', 
          height: '247px', 
          backgroundColor: '#eeeeee', 
          borderRadius: '25px', 
          padding: '20px', 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          position: 'relative', 
          zIndex: 1
        }}
      >
        {/* Logo and Company Name */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <img 
            src="https://dashboard.codeparrot.ai/api/image/Z7M8O6WN819FoZg4/rectangl.png"
            alt="Company Logo"
            style={{ width: '185px', height: '185px', borderRadius: '82px' }}
          />
          <h1 style={{
            fontFamily: 'Anta, sans-serif', 
            fontSize: '90px', 
            fontWeight: 800, 
            lineHeight: '100px', 
            color: '#000000', 
            margin: 0
          }}>
            SSMR POLY PACKS
          </h1>
        </div>

        {/* Contact Information */}
        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '20px', alignItems: 'center' }}>
          {/* Location */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <img 
              src="https://dashboard.codeparrot.ai/api/image/Z7M8O6WN819FoZg4/location-2.png"
              alt="Location"
              style={{ width: '48px', height: '47px' }}
            />
            <p style={{
              fontFamily: 'Poppins', fontSize: '20px', fontWeight: 800, color: '#000000', margin: 0, maxWidth: '309px'
            }}>
              5/37, Near Saravana Garden, nagaramalai road, reddiyur, alagapuram, salem - 636004
            </p>
          </div>

          {/* Divider */}
          <div style={{ width: '1px', height: '139px', backgroundColor: '#000000' }} />

          {/* Phone */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <img 
              src="https://dashboard.codeparrot.ai/api/image/Z7M8O6WN819FoZg4/phone-2.png"
              alt="Phone"
              style={{ width: '48px', height: '48px' }}
            />
            <p style={{ fontFamily: 'Poppins', fontSize: '20px', fontWeight: 800, color: '#000000', margin: 0 }}>
              +91 87600 62202<br />+91 9080810454
            </p>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <div style={{
        width: '100%', height: '93px', backgroundColor: '#757575', display: 'flex', 
        justifyContent: 'space-around', alignItems: 'center', marginTop: '20px'
      }}>
        {['HOME', 'ABOUT US', 'OUR PRODUCT', 'GALLERY', 'CONTACT US'].map((item) => (
          <button
            key={item}
            style={{
              fontFamily: 'Poppins', fontSize: '24px', fontWeight: 800, color: '#ffffff',
              background: 'none', border: 'none', cursor: 'pointer', padding: '10px 20px',
              transition: 'opacity 0.3s'
            }}
            onMouseOver={(e) => e.target.style.opacity = '0.8'}
            onMouseOut={(e) => e.target.style.opacity = '1'}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Header;
