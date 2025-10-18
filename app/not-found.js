'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function NotFound() {
	const router = useRouter();
	return (
		<div className='error-page container'>
			<Image
				src='/404.png'
				alt='Not Found Image'
				width={600}
				height={200}
			></Image>
			<h1>Page Not Found</h1>
			<div className='actions'>
				<button onClick={() => router.back()} className='online'>
					Go back
				</button>
			</div>
		</div>
	);
}
