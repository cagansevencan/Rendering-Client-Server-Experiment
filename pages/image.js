import React from 'react';

const Image = ({ imageUrl }) => {
  const containerStyle = {
    width: '500px',
    height: '500px',
    backgroundColor: '#98FB98',
    padding: '20px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    borderRadius: '5px',
    margin: '10px',
  };

  const imageStyle = {
    maxWidth: '100%',
    maxHeight: '100%',
  };

  return (
    <div style={containerStyle}>
      <img src={imageUrl} alt="Image" style={imageStyle} />
    </div>
  );
};

export default Image;
