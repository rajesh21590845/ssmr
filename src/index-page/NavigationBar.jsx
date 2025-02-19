import React from 'react';

const NavigationBar = () => {
  return (
    <div style={{
      width: '100%',
      minWidth: '1200px',
      minHeight: '485px',
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      backgroundColor: '#EEEEEE',
      padding: '20px',
      overflow: 'hidden'  // Ensure the image doesn't overflow unwantedly
    }}>
      
      {/* Background Image */}
      <div style={{
        position: 'absolute',
        top: '0px',
        left: '-187px', // Adjusted X position
        width: 'auto',
        height: '100%',
        backgroundImage: 'url("/images/Vector 1.png")',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        zIndex: 0,
      }} />

      {/* Top Section with Logo and Contact Info */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '20px',
        padding: '20px',
        position: 'relative',
        zIndex: 1  // Ensure content is above the background
      }}>
        
        {/* Logo Section */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '20px'
        }}>
          <img 
            src="https://dashboard.codeparrot.ai/api/image/Z7NVcKWN819FoZhw/whats-app.png"
            alt="Company Logo"
            style={{
              width: '100px',
              height: '100px',
              borderRadius: '50px'
            }}
          />
          <h1 style={{
            fontFamily: 'Poppins',
            fontWeight: 800,
            fontSize: '36px',
            lineHeight: '40px',
            color: '#000000',
            margin: 0
          }}>
            SSMR POLY PACKS
          </h1>
        </div>

        {/* Contact Information */}
        <div style={{
          display: 'flex',
          alignItems: 'flex-start',
          gap: '20px'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'flex-start',
            gap: '10px'
          }}>
            <img 
              src="https://dashboard.codeparrot.ai/api/image/Z7NVcKWN819FoZhw/location.png"
              alt="Location"
              style={{
                width: '24px',
                height: '24px'
              }}
            />
            <p style={{
              fontFamily: 'Poppins',
              fontWeight: 800,
              fontSize: '14px',
              color: '#000000',
              margin: 0,
              maxWidth: '200px'
            }}>
              5/37, Near Saravana Garden, nagaramalai road,
              reddiyur, alagapuram, salem-636004
            </p>
          </div>

          <div style={{
            width: '1px',
            height: '60px',
            backgroundColor: '#000000',
            margin: '0 20px'
          }} />

          <div style={{
            display: 'flex',
            alignItems: 'flex-start',
            gap: '10px'
          }}>
            <img 
              src="https://dashboard.codeparrot.ai/api/image/Z7NVcKWN819FoZhw/phone.png"
              alt="Phone"
              style={{
                width: '24px',
                height: '24px'
              }}
            />
            <p style={{
              fontFamily: 'Poppins',
              fontWeight: 800,
              fontSize: '14px',
              color: '#000000',
              margin: 0
            }}>
              +91 87600 62202<br />+91 9080810454
            </p>
          </div>
        </div>
      </div>

      {/* Navigation Menu */}
      <div style={{
        width: '100%',
        height: '60px',
        backgroundColor: '#757575',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        position: 'relative',
        zIndex: 1
      }}>
        {['HOME', 'ABOUT US', 'OUR PRODUCT', 'GALLERY', 'CONTACT US'].map((item) => (
          <button
            key={item}
            style={{
              fontFamily: 'Poppins',
              fontWeight: 800,
              fontSize: '16px',
              color: '#FFFFFF',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '10px 20px',
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

export default NavigationBar;
