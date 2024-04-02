import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import styles from '../styles/Main.module.css';

// Set this to true for SSR, false for CSR
const ENABLE_SSR = true; // Change this flag before deployment as needed

// Dynamic imports with conditional SSR/CSR
const Component = dynamic(() => import('./component'), {
	ssr: ENABLE_SSR,
	prefetch: false
});

const Image = dynamic(() => import('./image'), {
	ssr: ENABLE_SSR,
	prefetch: false
});

export default function Home() {
	const [toggleStatus, setToggleStatus] = useState(false);
	const [imageUrls, setImageUrls] = useState(
		Array.from({ length: 20 }, () => 'https://picsum.photos/750')
	);
	const [isLoading, setIsLoading] = useState(true);
	const [loadedCount, setLoadedCount] = useState(0);

	const buttonStyle = {
		backgroundColor: toggleStatus ? '#4CAF50' : '#008CBA'
	};

	useEffect(() => {
		const startLoad = performance.now();
		return () => {
			const endLoad = performance.now();
			const loadTime = endLoad - startLoad;
			console.log('Load Time:', loadTime, 'ms');
			console.log('Load Time:', loadTime.toFixed(2) / 1000, 's');
		};
	}, []);

	const handleButtonClick = () => {
		setToggleStatus(!toggleStatus);
		setIsLoading(true);

		// Dynamically update image URLs
		const newImageUrl = `https://picsum.photos/750?random=${Math.random()}`;
		setImageUrls(Array.from({ length: 20 }, () => newImageUrl));
	};

	const handleImageLoad = () => {
		// Check if all images have loaded
		setLoadedCount(prevCount => prevCount + 1);
	};

	useEffect(() => {
		if (loadedCount === imageUrls.length) {
			setIsLoading(false); // Re-enable the button
			setLoadedCount(0); // Reset the loaded count for the next button click
		}
	}, [loadedCount, imageUrls.length]);

	console.log('SSR:', ENABLE_SSR);

	const components = [
		{
			title: ENABLE_SSR ? 'Component - SSR' : 'Component - CSR',
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce posuere maximus rutrum. In hac habitasse platea dictumst. Vivamus vulputate elit eu arcu scelerisque, non sollicitudin ante viverra. Nunc suscipit sem orci, a dignissim massa congue facilisis. Nullam eleifend porttitor quam sit amet ultrices. Vestibulum posuere feugiat odio ut finibus. Morbi sagittis, nisl in venenatis tempus, nibh purus consequat ligula, ac rhoncus sapien ante ac quam. Nam pretium porta consectetur. Integer dolor velit, vehicula ultrices pulvinar tincidunt, sodales at tellus. Etiam vel felis lacus. Suspendisse semper leo vitae ligula lobortis scelerisque. Aenean in lacus ac orci vestibulum finibus sed quis sapien. Duis gravida sagittis accumsan. Ut id semper tortor, non bibendum ipsum. Pellentesque vel est a mauris faucibus pharetra. Etiam at massa vel mi imperdiet facilisis in ut purus. In tempor fringilla rhoncus. Pellentesque eleifend in libero ac tempor. Nulla sollicitudin eros quis augue vulputate placerat. Etiam imperdiet rhoncus venenatis. Suspendisse dignissim nunc ullamcorper tincidunt facilisis. Praesent quis urna consequat, dapibus elit et, scelerisque nunc. Fusce eu eros consectetur, vestibulum odio quis, pretium felis. Nunc vel purus fringilla, aliquam erat in, lobortis sapien. Aenean lorem ante, ullamcorper eget volutpat quis, maximus quis risus. Pellentesque tempor turpis nulla, sed ultrices urna tempus et. Phasellus ornare id ante sed consequat. Pellentesque dignissim ultrices maximus. Maecenas hendrerit mi vel libero consectetur, eu porta metus scelerisque. Duis ullamcorper dui quis dignissim iaculis. Praesent iaculis pellentesque rutrum. Ut in ipsum ipsum. Donec maximus posuere massa, in eleifend mauris interdum id. Mauris eu mi porta dolor volutpat consectetur euismod sed nunc. Fusce vestibulum blandit eros, sed fermentum orci. Aenean vel pellentesque eros, consectetur blandit turpis. Maecenas augue quam, molestie eget sapien eget, vestibulum maximus purus. Ut malesuada semper orci, ut fringilla lectus consectetur in. Ut dapibus arcu risus, ac tincidunt sapien semper at. Phasellus ut accumsan lacus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris consequat malesuada ante ac pretium. Integer sit amet dolor elementum magna pharetra eleifend. In fringilla sed enim a elementum. Nullam dolor lectus, tincidunt non metus nec, tincidunt molestie leo. Nunc imperdiet dictum justo. ',
			color: '#FFC0CB'
		}
	];

	return (
		<div
			style={{
				backgroundColor: '#F0F2F5',
				minHeight: '100vh',
				padding: '20px',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center'
			}}
		>
			<div className={styles.header}>
				<h1>Rendering Patterns Experiment</h1>
				<h4>Developed By: Cagan Sevencan</h4>
			</div>
			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					gap: '20px',
					'@media (maxWidth: 600px)': {
						flexDirection: 'column'
					}
				}}
			>
				<button
					onClick={handleButtonClick}
					disabled={isLoading}
					style={buttonStyle}
					className={styles.toggleButton}
				>
					{toggleStatus ? 'Toggled On' : 'Toggle Off'}
				</button>
				{imageUrls.map((url, index) => (
					<div key={index} className={styles.contentCreator}>
						<Image imageUrl={url} size={750} onLoad={handleImageLoad} />
						<Component component={components[0]} />
					</div>
				))}
			</div>
		</div>
	);
}
