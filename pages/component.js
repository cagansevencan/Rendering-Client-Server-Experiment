import styles from '../styles/Main.module.css';

function Component({ component }) {
	return (
		<div className={styles.component}>
			<h2>{component.title}</h2>
			<p>{component.text}</p>
		</div>
	);
}

export default Component;
