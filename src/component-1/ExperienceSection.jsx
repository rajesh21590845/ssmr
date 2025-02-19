import React, { useState, useEffect } from 'react';

const ExperienceSection = () => {
  const [years, setYears] = useState(0);
  const [customers, setCustomers] = useState(0);
  const [products, setProducts] = useState(0);

  const containerStyle = {
    width: '100%',
    minWidth: '300px',
    height: '175px',
    backgroundColor: '#aaff00',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: '20px'
  };

  const statStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0 20px'
  };

  const numberStyle = {
    fontFamily: 'Protest Guerrilla',
    fontSize: '36px',
    fontWeight: '400',
    color: '#000000',
    textAlign: 'center',
    margin: '0'
  };

  const textStyle = {
    fontFamily: 'Protest Guerrilla',
    fontSize: '36px',
    fontWeight: '400',
    color: '#000000',
    textAlign: 'center',
    margin: '0'
  };

  const dividerStyle = {
    width: '1px',
    height: '100%',
    backgroundColor: '#000000'
  };

  const animateCounter = (target, setState) => {
    let current = 0;
    const increment = Math.ceil(target / 100); // Determines how fast the number increases
    const interval = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(interval);
      }
      setState(current);
    }, 50); // Adjust the speed of the animation here (lower means faster)
  };

  useEffect(() => {
    animateCounter(20, setYears);
    animateCounter(200, setCustomers);
    animateCounter(7, setProducts);
  }, []);

  return (
    <div style={containerStyle}>
      <div style={statStyle}>
        <p style={numberStyle}>{years}+</p>
        <p style={textStyle}>YEARS OF EXPERIENCE</p>
      </div>
      
      <div style={dividerStyle}></div>
      
      <div style={statStyle}>
        <p style={numberStyle}>{customers}</p>
        <p style={textStyle}>HAPPY CUSTOMERS</p>
      </div>
      
      <div style={dividerStyle}></div>
      
      <div style={statStyle}>
        <p style={numberStyle}>{products}+</p>
        <p style={textStyle}>PRODUCTS</p>
      </div>
    </div>
  );
};

ExperienceSection.defaultProps = {
  yearsOfExperience: '20+',
  happyCustomers: '200',
  products: '7+'
};

export default ExperienceSection;
