import styles from './categories.module.css';

export default function Categories() {
	return (
		<div className={styles.categories}>
			<h2>Our Categories</h2>
			<ul className={`${styles.wrapper} container`}>
				<li className={styles.category}>Beaty</li>
				<li className={styles.category}>Fragrances</li>
				<li className={styles.category}>Furniture</li>
			</ul>
		</div>
	);
}
