import React from 'react';
import './Item.css';

function Item({ item, addItemToCart }) {
	return (
		<div className="item">
			<h3>{item.name}</h3>
			<p>${item.price.toFixed(2)}</p>
			<button onClick={() => addItemToCart(item)}>Add to Cart</button>
		</div>
	);
}

export default Item;
