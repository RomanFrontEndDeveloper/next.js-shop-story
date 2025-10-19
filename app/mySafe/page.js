import AddToBag from '../product/[id]/AddToBag';
import Image from 'next/image';
import { formatPrice } from '@/app/util';
import styles from './page.module.css';
import { notFound } from 'next/navigation';

// Змушує Next.js рендерити сторінку динамічно на сервері
export const dynamic = 'force-dynamic';

export default async function Page({ params }) {
	const { id } = params;
	let product = null;

	try {
		const res = await fetch(`https://dummyjson.com/products/${id}`, {
			next: { revalidate: 0 },
		});
		if (!res.ok) throw new Error('Product not found');
		product = await res.json();
	} catch (error) {
		console.error('Fetch failed:', error);
		return notFound(); // Повертаємо 404, якщо fetch не вдався
	}

	return (
		<div className={`${styles['product-page']} container`}>
			<section className={styles.photo}>
				<Image
					src={product.images[0]}
					alt={`Images for ${product.title}`}
					height={344}
					width={344}
				/>
			</section>

			<section className={styles.info}>
				<h1>{product.title}</h1>
				<p className={styles.price}>{formatPrice(product.price)}</p>
				<p>{product.description}</p>
				<AddToBag product={product} />
			</section>
		</div>
	);
}
