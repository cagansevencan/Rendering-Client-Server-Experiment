// pages/api/image.js
const delay = require('../../utils/delay'); // Assuming you have the delay function as previously described

export default async function handler(req, res) {
	console.log('Image API called');
	await delay(5000); // Introduce a 5-second delay

	console.log('Image API responding');

	const imageUrl = 'https://picsum.photos/500'; // URL of the image you want to fetch
	const response = await fetch(imageUrl);
	const imageBlob = await response.blob();

	res.setHeader('Content-Type', response.headers.get('Content-Type'));
	const imageBuffer = await imageBlob.arrayBuffer();
	res.send(Buffer.from(imageBuffer));
}
