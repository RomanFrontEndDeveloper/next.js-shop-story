import AddToBag from './AddToBag';
import styles from './page.module.css';
import Image from 'next/image';
import { formatPrice } from '../../util';

import { resolve } from 'styled-jsx/css';

export default async function page({ params }) {
	const { id } = await params;
	const data = await fetch(`https://dummyjson.com/products/${id}`);
	const product = await data.json();
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
