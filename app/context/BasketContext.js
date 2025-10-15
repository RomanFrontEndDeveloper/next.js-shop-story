'use client';
import { createContext, useState, useContext } from 'react';

const BasketContext = createContext();

export function BasketProvider({ children }) {
	const [items, setItems] = useState([]);
	return (
		<BasketContext.Provider value={{ items }}>
			{children}
		</BasketContext.Provider>
	);
}

export function useBasket() {
	return useContext(BasketContext);
}
