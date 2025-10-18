import styles from './categoriesList.module.css';

const sleep = async () => {
	return new Promise((resolve) => setTimeout(resolve, 5000));
};

export default async function CategoriesList() {
	await sleep();
	const data = await fetch('https://dummyjson.com/products/categories');
	const categories = await data.json();
	return (
		<ul className={`${styles.wrapper} container`}>
			{categories.map((category) => (
				<li key={category.slug} className={styles.category}>
					{category.name}
				</li>
			))}
		</ul>
	);
}
