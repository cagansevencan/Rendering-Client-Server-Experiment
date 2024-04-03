import styles from '../styles/Main.module.css';

const Image = ({ onLoad, imageUrl, size }) => {
	const dynamicStyle = {
		maxWidth: `${size}px`
	};

	return (
		<div className={styles.imageComponent} style={dynamicStyle}>
			<img src={imageUrl} alt='Dynamic Sized Image Loaded' onLoad={onLoad} />
		</div>
	);
};

export default Image;
