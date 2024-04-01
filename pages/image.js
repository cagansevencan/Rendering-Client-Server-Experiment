import React from 'react';

const Image = ({ onLoad, imageUrl, size }) => {
	const containerStyle = {
		width: `${size}px`,
		height: `${size}px`,
		backgroundColor: '#E0E0E0',
		padding: '20px',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
		borderRadius: '10px',
		margin: '10px'
	};

	const imageStyle = {
		maxWidth: '100%',
		maxHeight: '100%',
		borderRadius: '5px'
	};

	return (
		<div style={containerStyle}>
			<img src={imageUrl} alt='Dynamic Sized Image Loaded' onLoad={onLoad} style={imageStyle} />
		</div>
	);
};

export default Image;
