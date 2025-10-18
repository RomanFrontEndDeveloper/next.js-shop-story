import Image from 'next/image';
import styles from './hero.module.css';

export default function Hero() {
	return (
		<div>
			<Image
				className={styles.hero}
				src='/rambo.jpg'
				alt='Hero Image'
				width={1439}
				height={527}
			/>
		</div>
	);
}
