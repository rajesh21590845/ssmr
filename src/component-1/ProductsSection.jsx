import React from 'react';

const ProductsSection = () => {
  const products = [
    { id: 1, image: 'https://dashboard.codeparrot.ai/api/image/Z7NVcKWN819FoZhw/rectangl.png', text: 'this for chemical product' },
    { id: 2, image: 'https://dashboard.codeparrot.ai/api/image/Z7NVcKWN819FoZhw/rectangl-2.png', text: 'this for medicine' },
    { id: 3, image: 'https://dashboard.codeparrot.ai/api/image/Z7NVcKWN819FoZhw/rectangl-3.png', text: 'this product for sidha medicine' },
    { id: 4, image: 'https://dashboard.codeparrot.ai/api/image/Z7NVcKWN819FoZhw/rectangl-4.png', text: 'this product for camphor' },
    { id: 5, image: 'https://dashboard.codeparrot.ai/api/image/Z7NVcKWN819FoZhw/rectangl-5.png', text: 'this product for homeopathy' },
    { id: 6, image: 'https://dashboard.codeparrot.ai/api/image/Z7NVcKWN819FoZhw/rectangl-6.png', text: 'this product for customized' }
  ];

  const cardStyle = {
    width: '100%',
    maxWidth: '355px',
    height: '290px',
    borderRadius: '47px',
    position: 'relative',
    marginBottom: '20px',
    cursor: 'pointer',
    transition: 'transform 0.3s ease',
    overflow: 'hidden',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  };

  const overlayStyle = {
    width: '100%',
    height: '190px',
    borderRadius: '46px',
    backgroundColor: '#757575',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 0,
    marginBottom: '0'
  };

  const textStyle = {
    color: '#FFFFFF',
    fontFamily: "'Protest Guerrilla', sans-serif", // Ensure font is loaded
    fontSize: '36px',
    fontWeight: 400,
    textAlign: 'center'
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    padding: '20px',
    width: '100%',
    backgroundColor: 'inherit'
  };

  const rowStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    flexWrap: 'wrap'
  };

  const handleHover = (e) => {
    e.currentTarget.style.transform = 'scale(1.05)';
  };

  const handleHoverEnd = (e) => {
    e.currentTarget.style.transform = 'scale(1)';
  };

  return (
    <div style={containerStyle}>
      {/** Split into two rows */}
      {[0, 3].map((startIndex) => (
        <div key={startIndex} style={rowStyle}>
          {products.slice(startIndex, startIndex + 3).map((product) => (
            <div 
              key={product.id} 
              style={{ ...cardStyle, backgroundImage: `url('${product.image}')` }}
              onMouseEnter={handleHover}
              onMouseLeave={handleHoverEnd}
            >
              <div style={overlayStyle}>
                <p style={textStyle}>{product.text}</p>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ProductsSection;
