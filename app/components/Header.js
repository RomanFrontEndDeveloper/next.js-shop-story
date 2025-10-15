'use client';
import React from 'react';
import styles from './header.module.css';
import Image from 'next/image';
import Link from 'next/link';
import BasketCount from './BasketCount';

export default function Header() {
	return (
		<header className={styles['app-header']}>
			<div className={`${styles.wrapper} container`}>
				<aside>
					<Link href='/'>
						<Image
							src='/logo.png'
							alt='Logo'
							width={108}
							height={22}
						/>
					</Link>
				</aside>
				<aside>
					<nav>
						<ul>
							<Link href='/'>
								<li>Home</li>
							</Link>
							<Link href='/products'>
								<li>Products</li>
							</Link>
							<Link href='/basket'>
								<li className={styles.basket}>
									Shopping Bag
									<BasketCount />
								</li>
							</Link>
						</ul>
					</nav>
				</aside>
			</div>
		</header>
	);
}
