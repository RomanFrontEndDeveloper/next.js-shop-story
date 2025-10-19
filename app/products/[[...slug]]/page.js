import React from 'react';
import Products from '../Products';
import { ErrorBoundary } from '../../components/ErrorBoundary';

export default function page({ params }) {
	const category = params.slug?.[0] || null;
	return (
		<div className='products-page'>
			<div className='page-header'>
				<h1>Product Page</h1>
			</div>
			<ErrorBoundary fallback='Could not load products, please refresh the page.'>
				<Products category={category} />
			</ErrorBoundary>
		</div>
	);
}
