import React from 'react';

const Header = () => {
  const styles = {
    headerContainer: {
      position: 'relative',
      width: '100%',
      overflow: 'hidden',
      backgroundColor: '#FFFFFF',
    },
    logo: {
      position: 'absolute',
      left: '0',
      top: '0',
      width: '354px',
      height: '361px',
      borderRadius: '82px',
    },
    vector: {
      position: 'absolute',
      left: '0',
      top: '0',
      width: '1071px',
      height: '246px',
      backgroundColor: '#00DEF6',
      zIndex: -1,
    },
    companyName: {
      position: 'absolute',
      left: '288px',
      top: '22px',
      fontFamily: 'Poppins',
      fontWeight: 800,
      fontSize: '90px',
      lineHeight: '100px',
      color: '#E0E0E0',
    },
    contactInfo: {
      position: 'absolute',
      right: '20px',
      top: '74px',
      display: 'flex',
      alignItems: 'flex-start',
      gap: '16px',
    },
    address: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: '8px',
      fontFamily: 'Poppins',
      fontWeight: 800,
      fontSize: '20px',
      color: '#000000',
    },
    phone: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: '8px',
      fontFamily: 'Poppins',
      fontWeight: 800,
      fontSize: '20px',
      color: '#000000',
    },
    icon: {
      width: '48px',
      height: '48px',
    },
    navbar: {
      position: 'absolute',
      top: '246px',
      left: 0,
      width: '100%',
      height: '93px',
      backgroundColor: '#757575',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '40px',
    },
    navItem: {
      fontFamily: 'Poppins',
      fontWeight: 800,
      fontSize: '24px',
      color: '#000000',
      cursor: 'pointer',
      transition: 'color 0.3s ease',
    },
  };

  return (
    <header style={styles.headerContainer}>
      <img src="https://dashboard.codeparrot.ai/api/image/Z7R-2DO_YEiK212R/whats-app.png" alt="Logo" style={styles.logo} />
      <div style={styles.vector}></div>
      <h1 style={styles.companyName}>SSMR POLY PACKS</h1>
      
      <div style={styles.contactInfo}>
        <div style={styles.address}>
          <img src="https://dashboard.codeparrot.ai/api/image/Z7R-2DO_YEiK212R/location.png" alt="Location" style={styles.icon} />
          <p>5/37, Near Saravana Garden,nagaramalai road,<br/>reddiyur,alagapuram,salem-636004</p>
        </div>
        <div style={styles.phone}>
          <img src="https://dashboard.codeparrot.ai/api/image/Z7R-2DO_YEiK212R/phone.png" alt="Phone" style={styles.icon} />
          <p>+91 87600 62202<br/><br/>+919080810454</p>
        </div>
      </div>

      <nav style={styles.navbar}>
        <span style={styles.navItem}>HOME</span>
        <span style={styles.navItem}>ABOUT US</span>
        <span style={styles.navItem}>OUR PRODUCT</span>
        <span style={styles.navItem}>GALLERY</span>
        <span style={styles.navItem}>CONTACT US</span>
      </nav>
    </header>
  );
};

export default Header;