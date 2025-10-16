import styles from './productCard.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { formatPrice } from '../util';
export default function productCard({ product }) {
	return (
		<Link href={`/product/${product.id}`}>
			<li className={styles['product-card']}>
				<Image
					src={product.thumbnail}
					width={256}
					height={256}
					alt={`Image of ${product.title}`}
					style={{ width: '100%', height: 'auto' }} // зберігаємо пропорції
				/>

				<div className={styles.info}>
					<h3>{product.title}</h3>
					<p>{formatPrice(product.price)}</p>
				</div>
			</li>
		</Link>
	);
}
