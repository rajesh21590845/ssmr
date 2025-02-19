import React from 'react';

const HeroSection_WhyChooseUs = () => {
  const buttonStyle = {
    padding: '15px 40px',
    backgroundColor: '#08451c',
    color: '#ffffff',
    border: '1px solid #000000',
    borderRadius: '25px',
    cursor: 'pointer',
    fontSize: '24px',
    fontFamily: 'Port Lligat Sans',
    margin: '0 10px',
    transition: 'background-color 0.3s'
  };

  return (
    <div style={{ 
      width: '100%',
      minWidth: '1200px',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: 'inherit'
    }}>
      {/* Hero Section */}
      <div style={{
        padding: '40px 20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        background: 'linear-gradient(to bottom, #ffffff, #f5f5f5)'
      }}>
        <h1 style={{
          fontSize: '36px',
          fontFamily: 'Poppins',
          fontWeight: 800,
          marginBottom: '20px'
        }}>
          WELCOME TO SSMR POLY PACKS
        </h1>
        <p style={{
          fontSize: '24px',
          fontFamily: 'Port Lligat Sans',
          marginBottom: '30px',
          textAlign: 'center'
        }}>
          MANUFACTURER OF CONTANIER FOR MULTI PURPOSES
        </p>
        <div style={{ display: 'flex', gap: '20px' }}>
          <button 
            style={buttonStyle}
            onMouseOver={(e) => e.target.style.backgroundColor = '#0a5724'}
            onMouseOut={(e) => e.target.style.backgroundColor = '#08451c'}
          >
            KNOW MORE
          </button>
          <button 
            style={buttonStyle}
            onMouseOver={(e) => e.target.style.backgroundColor = '#0a5724'}
            onMouseOut={(e) => e.target.style.backgroundColor = '#08451c'}
          >
            CONTACT US
          </button>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div style={{
        backgroundColor: '#444444',
        padding: '40px 20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
        <div style={{
          display: 'flex',
          width: '100%',
          justifyContent: 'space-between',
          padding: '0 20px'
        }}>
          <div style={{ flex: 1 }}>
            <h2 style={{
              fontSize: '36px',
              fontFamily: 'Prosto One',
              color: '#f7f3f3',
              marginBottom: '20px'
            }}>
              POLY PACKS MANUFACTURER
            </h2>
            <img 
              src="https://dashboard.codeparrot.ai/api/image/Z7NVcKWN819FoZhw/pharmace.png" 
              alt="Pharmaceutical Containers"
              style={{
                width: '100%',
                maxWidth: '692px',
                borderRadius: '40px'
              }}
            />
          </div>
          
          <div style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            paddingLeft: '40px'
          }}>
            <h2 style={{
              fontSize: '48px',
              fontFamily: 'Protest Strike',
              color: '#f7f3f3',
              marginBottom: '30px'
            }}>
              WHY CHOOSE US ?
            </h2>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
              <img src="https://dashboard.codeparrot.ai/api/image/Z7NVcKWN819FoZhw/target-w.png" alt="Target" style={{ width: '50px', marginRight: '15px' }} />
              <span style={{ fontSize: '36px', fontFamily: 'REM', color: '#aaff00' }}>HIGH QUALITY</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
              <img src="https://dashboard.codeparrot.ai/api/image/Z7NVcKWN819FoZhw/rocket.png" alt="Rocket" style={{ width: '50px', marginRight: '15px' }} />
              <span style={{ fontSize: '36px', fontFamily: 'REM', color: '#aaff00' }}>HIGH QUATITY</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
              <img src="https://dashboard.codeparrot.ai/api/image/Z7NVcKWN819FoZhw/red-truc.png" alt="Truck" style={{ width: '50px', marginRight: '15px' }} />
              <span style={{ fontSize: '36px', fontFamily: 'REM', color: '#aaff00' }}>HIGH EFFICIENCY</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <img src="https://dashboard.codeparrot.ai/api/image/Z7NVcKWN819FoZhw/box-with.png" alt="Box" style={{ width: '50px', marginRight: '15px' }} />
              <span style={{ fontSize: '36px', fontFamily: 'REM', color: '#aaff00' }}>LARGE MANUFACTURE</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection_WhyChooseUs;