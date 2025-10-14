import styles from './productCard.module.css';
import Image from 'next/image';
import Link from 'next/link';

export default function productCard({ product }) {
	return (
		<Link href={`/product/${product.id}`}>
			<li className={styles['product-card']}>
				<Image
					src={product.thumbnail}
					width={256}
					height={256}
					alt={`Image of ${product.title}`}
				/>
				<div className={styles.info}>
					<h3>{product.title}</h3>
					<p>$ {product.price}</p>
				</div>
			</li>
		</Link>
	);
}
