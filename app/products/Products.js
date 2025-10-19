import CategoryFilter from './CategoryFilter';
import PaginatedList from './PaginatedList';
import styles from './products.module.css';

export default async function Products({ category }) {
	const res = await fetch(
		`https://dummyjson.com/products${
			category ? '/category/' + category : ''
		}?limit=8`
	);
	const products = await res.json();

	const catData = await fetch('https://dummyjson.com/products/categories');
	const categories = await catData.json();

	return (
		<div className={`${styles['products-list']} container`}>
			<CategoryFilter categories={categories} activeCategory={category} />
			<ul className={styles.products}>
				<PaginatedList
					category={category}
					initialProducts={products.products}
					totalProducts={products.total}
				/>
			</ul>
		</div>
	);
}
