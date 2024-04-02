import styles from '../styles/Main.module.css';

const Image = ({ onLoad, imageUrl, size }) => {
	const dynamicStyle = {
		maxWidth: `${size}px`
	};

	const imageStyle = {
		maxWidth: '100%',
		maxHeight: '100%',
		borderRadius: '5px'
	};

	return (
		<div className={styles.imageComponent} style={dynamicStyle}>
			<img src={imageUrl} alt='Dynamic Sized Image Loaded' onLoad={onLoad} style={imageStyle} />
		</div>
	);
};

export default Image;
