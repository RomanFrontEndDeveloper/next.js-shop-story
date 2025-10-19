import styles from './products.module.css';
import Link from 'next/link';
import ProductsList from './ProductsList';
import { ErrorBoundary } from '../components/ErrorBoundary';

export default async function Products({ category }) {
	return (
		<div className={styles.products}>
			<div className={`${styles.wrapper} container`}>
				<h2>Highest Rated Products</h2>
				<p>
					Check out below a curated list of the products that received
					the highest ratings from our customers
				</p>
				<ErrorBoundary fallback='Could not losd products, please refresh the Page.'>
					<ProductsList />
				</ErrorBoundary>
				<Link href='/products'>
					<button>View all products</button>
				</Link>
			</div>
		</div>
	);
}
