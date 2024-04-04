import '@/styles/globals.css';

// export function reportWebVitals(metric) {
// 	// Destructure the metric object to log out relevant properties
// 	const { id, name, label, value } = metric;

// 	console.log(`[Web Vitals] LOCAL ${name} (${label}):`, value, metric);

// 	// You can add more detailed logging here if needed, or even filter by specific metrics like LCP, FID, etc.
// }

export default function App({ Component, pageProps }) {
	return <Component {...pageProps} />;
}
