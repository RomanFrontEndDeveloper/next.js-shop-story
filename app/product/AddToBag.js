'use client';
import styles from './addToBag.module.css';

export default function AddToBag() {
	return (
		<div className={styles['add-to-bag']}>
			<button onClick={() => alert('add to Bag')}>Add to Bag</button>
		</div>
	);
}
