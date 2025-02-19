import React from 'react';

const SeeMoreButton = ({ onClick = () => {} }) => {
  const buttonStyles = {
    width: '156px',
    height: '44px',
    padding: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#ffffff',
    border: '1px solid #2c2c2c',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxSizing: 'border-box',
  };

  const textStyles = {
    fontFamily: 'Prosto One, sans-serif',
    fontSize: '24px',
    fontWeight: 400,
    lineHeight: '100%',
    color: '#000000',
    margin: 0,
    userSelect: 'none',
  };

  return (
    <button 
      style={buttonStyles}
      onClick={onClick}
      onMouseOver={(e) => {
        e.currentTarget.style.backgroundColor = '#f5f5f5';
        e.currentTarget.style.transform = 'translateY(-2px)';
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.backgroundColor = '#ffffff';
        e.currentTarget.style.transform = 'translateY(0)';
      }}
    >
      <span style={textStyles}>see more</span>
    </button>
  );
};

export default SeeMoreButton;