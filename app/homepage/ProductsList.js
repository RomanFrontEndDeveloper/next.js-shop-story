import styles from './productsList.module.css';
import ProductCard from '../components/ProductCard';

const sleep = async () => {
	return new Promise((resolve) => setTimeout(resolve, 5000));
};

export default async function ProductsList() {
	await sleep();
	const res = await fetch(
		'https://dummyjson.com/products?limit=12&sortBy=rating&order=desc'
	);
	const data = await res.json();
	return (
		<ul className={styles['products-list']}>
			{data.products.map((product) => (
				<ProductCard key={product.id} product={product} />
			))}
		</ul>
	);
}
