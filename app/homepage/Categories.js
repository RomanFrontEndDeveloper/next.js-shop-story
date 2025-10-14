import styles from './categories.module.css';

export default async function Categories() {
	const data = await fetch('https://dummyjson.com/products/categories');
	const categories = await data.json();

	return (
		<div className={styles.categories}>
			<h2>Our Categories</h2>
			<ul className={`${styles.wrapper} container`}>
				{categories.map((category) => (
					<li key={category.slug} className={styles.category}>
						{category.name}
					</li>
				))}
			</ul>
		</div>
	);
}
