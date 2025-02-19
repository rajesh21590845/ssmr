import React from 'react';

const Footer = () => {
  const footerStyle = {
    width: '100%',
    minHeight: '606px',
    padding: '20px',
    backgroundColor: '#f5f5f5',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px'
  };

  const topRowStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '20px'
  };

  const contactItemStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    flex: '1 1 30%',
    minWidth: '250px'
  };

  const iconStyle = {
    width: '40px',
    height: '40px',
    objectFit: 'contain'
  };

  const textStyle = {
    fontFamily: 'Poppins',
    fontWeight: 800,
    fontSize: '16px',
    color: '#000000'
  };

  const contentRowStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    marginTop: '40px',
    padding: '0 20px'
  };

  const sectionStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    flex: '1 1 30%',
    minWidth: '250px'
  };

  const sectionTitleStyle = {
    fontFamily: 'Post No Bills Colombo',
    fontWeight: 700,
    fontSize: '24px',
    color: '#000000'
  };

  const sectionContentStyle = {
    fontFamily: 'Post No Bills Colombo Medium',
    fontWeight: 400,
    fontSize: '16px',
    color: '#000000',
    maxWidth: '335px'
  };

  const quickLinksStyle = {
    fontFamily: 'Post No Bills Colombo ExtraBold',
    fontWeight: 800,
    fontSize: '16px',
    color: '#000000',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px'
  };

  return (
    <footer style={footerStyle}>
      <div style={topRowStyle}>
        <div style={contactItemStyle}>
          <img src="https://dashboard.codeparrot.ai/api/image/Z7M8O6WN819FoZg4/location.png" alt="Location" style={iconStyle} />
          <p style={textStyle}>5/37, Saravana Garden,nagaramalai road,<br />reddiyur,alagapuram,salem-636004</p>
        </div>
        <div style={contactItemStyle}>
          <img src="https://dashboard.codeparrot.ai/api/image/Z7M8O6WN819FoZg4/phone.png" alt="Phone" style={iconStyle} />
          <p style={textStyle}>+91 87600 62202</p>
        </div>
        <div style={contactItemStyle}>
          <img src="https://dashboard.codeparrot.ai/api/image/Z7M8O6WN819FoZg4/mail.png" alt="Email" style={iconStyle} />
          <p style={textStyle}>ssmrpolypacks@gmail.com</p>
        </div>
      </div>

      <div style={contentRowStyle}>
        <div style={sectionStyle}>
          <h3 style={sectionTitleStyle}>ABOUT US</h3>
          <p style={sectionContentStyle}>
            SSMR IS A POLY PACKS MANUFACTURER COMPANY .WE CAN GENARATE ALL TYPES OF CONTAINER
          </p>
        </div>

        <div style={sectionStyle}>
          <h3 style={sectionTitleStyle}>OUR PRODUCTS</h3>
        </div>

        <div style={sectionStyle}>
          <h3 style={sectionTitleStyle}>QUICK LINKS</h3>
          <div style={quickLinksStyle}>
            <span>-ABOUT US</span>
            <span>-GALLERY</span>
            <span>-PRODUCT</span>
            <span>-CONTACT US</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;