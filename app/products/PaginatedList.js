'use client';
import { useState } from 'react';

import ProductCard from '../components/productCard'; // <-- відносний шлях до components
import Loader from '../components/Loader';

export default function PaginatedList({
	initialProducts,
	totalProducts,
	category,
}) {
	const [products, setProducts] = useState(initialProducts);
	const [error, setError] = useState('');
	const [loading, setLoading] = useState(false);

	const handleLoadMore = async () => {
		setError('');
		setLoading(true);
		try {
			const res = await fetch(
				`https://dummyjson.com/products${
					category ? '/category/' + category : ''
				}?limit=8&skip=${products.length}`
			);
			const data = await res.json();
			setProducts([...products, ...data.products]);
		} catch {
			setError('Failed to load Products');
		} finally {
			setLoading(false);
		}
	};

	return (
		<>
			{products.map((product) => (
				<ProductCard key={product.id} product={product} />
			))}
			{products.length < totalProducts ? (
				<button disabled={loading} onClick={handleLoadMore}>
					{loading ? <Loader /> : 'Load more'}
				</button>
			) : (
				''
			)}
			{error && <p>{error}</p>}
		</>
	);
}
