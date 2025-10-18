import AddToBag from '../AddToBag';
import styles from './page.module.css';
import Image from 'next/image';
import { formatPrice } from '@/app/util';

export default async function page({ params }) {
	let product = null;

	try {
		const { id } = await params;
		const data = await fetch(`https://dummyjsonTEST.com/products/${id}`);
		product = await data.json();
	} catch (error) {
		console.log(error);
	}

	return (
		<div className={`${styles['product-page']} container`}>
			{product ? (
				<>
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
						<p className={styles.price}>
							{formatPrice(product.price)}
						</p>
						<p>{product.description}</p>
						<AddToBag product={product} />
					</section>
				</>
			) : (
				<p>Unable to load Product</p>
			)}
		</div>
	);
}
