import React from 'react';

const ProductGallery = () => {
  const products = [
    { id: 1, image: 'https://dashboard.codeparrot.ai/api/image/Z7M8O6WN819FoZg4/rectangl.png' },
    { id: 2, image: 'https://dashboard.codeparrot.ai/api/image/Z7M8O6WN819FoZg4/rectangl-2.png' },
    { id: 3, image: 'https://dashboard.codeparrot.ai/api/image/Z7M8O6WN819FoZg4/rectangl-3.png' },
    { id: 4, image: 'https://dashboard.codeparrot.ai/api/image/Z7M8O6WN819FoZg4/rectangl-4.png' },
    { id: 5, image: 'https://dashboard.codeparrot.ai/api/image/Z7M8O6WN819FoZg4/rectangl-5.png' },
    { id: 6, image: 'https://dashboard.codeparrot.ai/api/image/Z7M8O6WN819FoZg4/rectangl-6.png' }
  ];

  const galleryStyles = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '24px',
    justifyContent: 'center',
    padding: '20px',
    width: '100%',
    maxWidth: '1400px',
    margin: '0 auto'
  };

  const productCardStyles = {
    width: '355px',
    height: '290px',
    borderRadius: '47px',
    overflow: 'hidden',
    cursor: 'pointer',
    transition: 'transform 0.3s ease',
    ':hover': {
      transform: 'scale(1.05)'
    }
  };

  const imageStyles = {
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  };

  return (
    <div style={galleryStyles}>
      {products.map((product) => (
        <div 
          key={product.id} 
          style={productCardStyles}
          onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
          onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
          <img
  src={product.image}
  alt={`Product ${product.id}`}
  style={imageStyles}
/>

        </div>
      ))}
    </div>
  );
};

export default ProductGallery;