import React, { useState } from 'react';
import ItemList from './ItemList';
import Cart from './Cart';
import './App.css';

function App() {
	const [cartItems, setCartItems] = useState([]);

	const addItemToCart = (item) => {
		const itemExists = cartItems.find((x) => x.id === item.id);
		if (itemExists) {
			// Todo: Set the state `cartItems` in case the item exists in the cart
		} else {
			// Todo: Set the state `cartItems` to the list of existing items along with the new item if it doesn't exist
		}
	};

	return (
		<div className="app">
			<h1>Shopping Cart</h1>
			<div className="content">
				<ItemList addItemToCart={addItemToCart} />
				<Cart cartItems={cartItems} />
			</div>
		</div>
	);
}

export default App;
