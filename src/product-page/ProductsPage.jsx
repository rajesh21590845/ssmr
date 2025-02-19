import React from 'react';

const ProductsPage = () => {
  const navItems = ['HOME', 'ABOUT US', 'OUR PRODUCT', 'GALLERY', 'CONTACT US'];

  return (
    <div style={{ backgroundColor: '#e0e0e0', minHeight: '100vh', width: '100%' }}>
      {/* Header Section */}
      <div style={{ position: 'relative' }}>
        <div style={{ 
          backgroundColor: '#eeeeee', 
          height: '247px',
          borderRadius: '25px',
          position: 'relative',
          display: 'flex',
          alignItems: 'center'
        }}>
          <div style={{
            backgroundColor: '#00def6',
            width: '702px',
            height: '254px',
            position: 'absolute',
            left: 0
          }} />
          
          <div style={{
            position: 'absolute',
            right: '30%',
            width: '440px',
            height: '482px',
            backgroundColor: '#00def6',
            clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)'
          }} />

          <h1 style={{
            fontFamily: 'Poppins',
            fontWeight: 800,
            fontSize: '90px',
            color: '#e0e0e0',
            margin: '0',
            marginLeft: '225px',
            position: 'relative',
            zIndex: 2
          }}>
            SSMR POLY PACKS
          </h1>

          <div style={{
            display: 'flex',
            position: 'absolute',
            right: '20px',
            top: '50%',
            transform: 'translateY(-50%)',
            gap: '20px',
            color: '#e0e0e0',
            fontFamily: 'Poppins',
            fontWeight: 800,
            fontSize: '20px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <img src="https://dashboard.codeparrot.ai/api/image/Z7NY2jO_YEiK21wz/location.png" alt="location" style={{ width: '48px', height: '47px' }} />
              <p style={{ maxWidth: '309px' }}>
                5/37, Near Saravana Garden,nagaramalai road,
                reddiyur,alagapuram,salem-636004
              </p>
            </div>
            
            <div style={{ width: '1px', height: '139px', backgroundColor: '#e0e0e0' }} />
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <img src="https://dashboard.codeparrot.ai/api/image/Z7NY2jO_YEiK21wz/phone.png" alt="phone" style={{ width: '48px', height: '48px' }} />
              <p>
                +91 87600 62202<br />
                +919080810454
              </p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div style={{
          backgroundColor: '#757575',
          height: '93px',
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center',
          padding: '0 218px',
          gap: '200px'
        }}>
          {navItems.map((item) => (
            <button
              key={item}
              style={{
                fontFamily: 'Poppins',
                fontWeight: 800,
                fontSize: '24px',
                color: '#000000',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '10px',
                transition: 'color 0.3s',
              }}
              onMouseOver={(e) => e.target.style.color = '#e0e0e0'}
              onMouseOut={(e) => e.target.style.color = '#000000'}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      {/* Products Grid */}
      <div style={{ padding: '40px', display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '40px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <img 
            src="https://dashboard.codeparrot.ai/api/image/Z7NY2jO_YEiK21wz/rectangl.png" 
            alt="Cosmetic Container"
            style={{ width: '808px', height: '287px', borderRadius: '47px', objectFit: 'cover' }}
          />
          <h2 style={{ fontFamily: 'PT Sans Caption', fontSize: '36px' }}>
            Cosmetic & Personal Care Containers
          </h2>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <img 
            src="https://dashboard.codeparrot.ai/api/image/Z7NY2jO_YEiK21wz/rectangl-2.png" 
            alt="Pharmaceutical Container"
            style={{ width: '438px', height: '311px', borderRadius: '47px', objectFit: 'cover' }}
          />
          <h2 style={{ fontFamily: 'PT Sans Caption', fontSize: '36px' }}>
            Pharmaceutical Containers
          </h2>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <img 
            src="https://dashboard.codeparrot.ai/api/image/Z7NY2jO_YEiK21wz/rectangl-3.png" 
            alt="Industrial Container"
            style={{ width: '377px', height: '443px', borderRadius: '47px', objectFit: 'cover' }}
          />
          <h2 style={{ fontFamily: 'PT Sans Caption', fontSize: '36px' }}>
            Industrial & Chemical Packaging
          </h2>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <img 
            src="https://dashboard.codeparrot.ai/api/image/Z7NY2jO_YEiK21wz/rectangl-4.png" 
            alt="Camphor Container"
            style={{ width: '452px', height: '337px', borderRadius: '47px', objectFit: 'cover' }}
          />
          <h2 style={{ fontFamily: 'PT Sans Caption', fontSize: '36px' }}>
            Camphor dabbi is crafted with precision
          </h2>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <img 
            src="https://dashboard.codeparrot.ai/api/image/Z7NY2jO_YEiK21wz/rectangl-5.png" 
            alt="Homeopathy Container"
            style={{ width: '456px', height: '419px', borderRadius: '47px', objectFit: 'cover' }}
          />
          <h2 style={{ fontFamily: 'PT Sans Caption', fontSize: '36px' }}>
            Homeopathy containers
          </h2>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;