'use client';
import { createContext, useState, useContext, useEffect } from 'react';

const BasketContext = createContext();

export function BasketProvider({ children }) {
	const [items, setItems] = useState([]);

	useEffect(() => {
		const storedItems = localStorage.getItem('basket');
		if (storedItems) {
			try {
				const parsedItems = JSON.parse(storedItems);
				// Перевіряємо, чи це справді масив
				if (Array.isArray(parsedItems)) {
					setItems(parsedItems);
				} else {
					console.warn('Invalid basket format, resetting to []');
					setItems([]);
				}
			} catch (error) {
				console.error('Error parsing basket from localStorage:', error);
				setItems([]);
			}
		}
	}, []);

	useEffect(() => {
		try {
			localStorage.setItem('basket', JSON.stringify(items));
		} catch (error) {
			console.error('Error saving basket to localStorage:', error);
		}
	}, [items]);

	const addToBag = (product, quantity) => {
		setItems((prevItems) => {
			if (prevItems.find((item) => item.id === product.id))
				return prevItems;
			return [...prevItems, { ...product, quantity }];
		});
	};

	const removeFromBag = (productId) => {
		setItems((prevItems) => {
			return prevItems.filter((item) => item.id !== productId);
		});
	};

	const updateQuantity = (productId, quantity) => {
		setItems((prevItems) => {
			return prevItems.map((item) =>
				item.id === productId ? { ...item, quantity } : item
			);
		});
	};

	const emptyBasket = () => {
		setItems([]);
	};

	return (
		<BasketContext.Provider
			value={{
				items,
				addToBag,
				removeFromBag,
				updateQuantity,
				emptyBasket,
			}}
		>
			{children}
		</BasketContext.Provider>
	);
}

export function useBasket() {
	return useContext(BasketContext);
}
