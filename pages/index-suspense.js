import React, { useEffect, Suspense } from 'react';
import dynamic from 'next/dynamic';

// Set this to true for SSR, false for CSR
const ENABLE_SSR = false; // Change this flag before deployment as needed

// Dynamic imports with conditional SSR/CSR
const Component = dynamic(() => import('./textcomponent'), {
	ssr: ENABLE_SSR,
	prefetch: false,
	loading: () => <p>Loading...</p> // Loading component specific to this dynamic import
});

const Image = dynamic(() => import('./image'), {
	ssr: ENABLE_SSR,
	prefetch: false,
	loading: () => <p>Loading...</p> // Loading component specific to this dynamic import
});

export default function Home() {
	// const [imageUrls, setImageUrls] = useState(
	// 	Array.from({ length: 20 }, (_, index) => `https://picsum.photos/seed/${index + 1}/1000`)
	// );
	useEffect(() => {
		const startLoad = performance.now();
		return () => {
			const endLoad = performance.now();
			const loadTime = endLoad - startLoad;
			console.log('Load Time:', loadTime, 'ms');
			console.log('Load Time:', loadTime.toFixed(2) / 1000, 's');
		};
	}, []);

	console.log('SSR:', ENABLE_SSR);
	const elements = Array.from({ length: 20 });

	const components = [
		{
			title: ENABLE_SSR ? 'Component - SSR' : 'Component - CSR',
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce posuere maximus rutrum. In hac habitasse platea dictumst. Vivamus vulputate elit eu arcu scelerisque, non sollicitudin ante viverra. Nunc suscipit sem orci, a dignissim massa congue facilisis. Nullam eleifend porttitor quam sit amet ultrices. Vestibulum posuere feugiat odio ut finibus. Morbi sagittis, nisl in venenatis tempus, nibh purus consequat ligula, ac rhoncus sapien ante ac quam. Nam pretium porta consectetur. Integer dolor velit, vehicula ultrices pulvinar tincidunt, sodales at tellus. Etiam vel felis lacus. Suspendisse semper leo vitae ligula lobortis scelerisque. Aenean in lacus ac orci vestibulum finibus sed quis sapien. Duis gravida sagittis accumsan. Ut id semper tortor, non bibendum ipsum. Pellentesque vel est a mauris faucibus pharetra. Etiam at massa vel mi imperdiet facilisis in ut purus. In tempor fringilla rhoncus. Pellentesque eleifend in libero ac tempor. Nulla sollicitudin eros quis augue vulputate placerat. Etiam imperdiet rhoncus venenatis. Suspendisse dignissim nunc ullamcorper tincidunt facilisis. Praesent quis urna consequat, dapibus elit et, scelerisque nunc. Fusce eu eros consectetur, vestibulum odio quis, pretium felis. Nunc vel purus fringilla, aliquam erat in, lobortis sapien. Aenean lorem ante, ullamcorper eget volutpat quis, maximus quis risus. Pellentesque tempor turpis nulla, sed ultrices urna tempus et. Phasellus ornare id ante sed consequat. Pellentesque dignissim ultrices maximus. Maecenas hendrerit mi vel libero consectetur, eu porta metus scelerisque. Duis ullamcorper dui quis dignissim iaculis. Praesent iaculis pellentesque rutrum. Ut in ipsum ipsum. Donec maximus posuere massa, in eleifend mauris interdum id. Mauris eu mi porta dolor volutpat consectetur euismod sed nunc. Fusce vestibulum blandit eros, sed fermentum orci. Aenean vel pellentesque eros, consectetur blandit turpis. Maecenas augue quam, molestie eget sapien eget, vestibulum maximus purus. Ut malesuada semper orci, ut fringilla lectus consectetur in. Ut dapibus arcu risus, ac tincidunt sapien semper at. Phasellus ut accumsan lacus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris consequat malesuada ante ac pretium. Integer sit amet dolor elementum magna pharetra eleifend. In fringilla sed enim a elementum. Nullam dolor lectus, tincidunt non metus nec, tincidunt molestie leo. Nunc imperdiet dictum justo. ',
			color: '#FFC0CB'
		}
	];

	return (
		<Suspense fallback={<div>Loading Components...</div>}>
			<div>
				<div style={{ textAlign: 'center' }}>
					<h1 style={{ fontSize: '48px', fontWeight: 'bold' }}>Rendering Patterns Experiment</h1>
					<h4 style={{ fontSize: '16px' }}>Developed By: Cagan Sevencan</h4>
				</div>
				<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
					{elements.map((_, index) => (
						<div key={index} style={{ display: 'flex', justifyContent: 'center' }}>
							<Component component={components[0]} />
							<Image imageUrl={'https://picsum.photos/500'} />
						</div>
					))}
				</div>
			</div>
		</Suspense>
	);
}
