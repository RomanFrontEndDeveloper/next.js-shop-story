import styles from './categories.module.css';
import CategoriesList from './CategoriesList';
import { ErrorBoundary } from '../components/ErrorBoundary';

export default function Categories() {
	return (
		<div className={styles.categories}>
			<h2>Our Categories</h2>
			<ErrorBoundary fallback='Could notload categories, please refresh the Page.'>
				<CategoriesList />
			</ErrorBoundary>
		</div>
	);
}
