function Component({ component }) {
	return (
		<div
			style={{
				width: '500px',
				height: '500px',
				background: '#FFF',
				color: '#333',
				margin: '10px',
				padding: '20px',
				borderRadius: '10px',
				boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
				display: 'flex',
				flexDirection: 'column'
			}}
		>
			<h2 style={{ fontWeight: 'bold', fontSize: '24px', marginBottom: '10px' }}>
				{component.title}
			</h2>
			<p
				style={{
					overflow: 'auto',
					textOverflow: 'ellipsis',
					marginBottom: '10px'
				}}
			>
				{component.text}
			</p>
		</div>
	);
}

export default Component;
