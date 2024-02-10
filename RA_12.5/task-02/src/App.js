import React, { useState } from 'react';
import ItemList from './ItemList';
import Cart from './Cart';
import './App.css';

function App() {
	const [cartItems, setCartItems] = useState([]);

	const addItemToCart = (item) => {
		const exist = cartItems.find((x) => x.id === item.id);
		if (exist) {
			setCartItems(
				cartItems.map((x) =>
					x.id === item.id ? { ...exist, qty: exist.qty + 1 } : x
				)
			);
		} else {
			setCartItems([...cartItems, { ...item, qty: 1 }]);
		}
	};

	const updateItemCount = (itemId, qty) => {
		return; // Todo: Replace this line with the code that sets the `cartItems` state according to the instructions
	};

	return (
		<div className="app">
			<h1>Shopping Cart</h1>
			<div className="content">
				<ItemList addItemToCart={addItemToCart} />
				<Cart cartItems={cartItems} updateItemCount={updateItemCount} />
			</div>
		</div>
	);
}

export default App;
