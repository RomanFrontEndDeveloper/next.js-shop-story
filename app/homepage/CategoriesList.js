import styles from './categoriesList.module.css';
import Link from 'next/link';

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
				<Link key={category.slug} href={`/products/${category.slug}`}>
					<li key={category.slug} className={styles.category}>
						{category.name}
					</li>
				</Link>
			))}
		</ul>
	);
}
