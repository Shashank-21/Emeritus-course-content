import React from 'react';
import Item from './Item';
import './ItemList.css';

function ItemList({ addItemToCart }) {
	const items = [
		{ id: 1, name: 'Eco-friendly Laundry Detergent', price: 15.99 },
		{ id: 2, name: 'Bamboo Toothbrush (4-pack)', price: 9.49 },
		{ id: 3, name: 'Stainless Steel Water Bottle', price: 20.99 },
		{ id: 4, name: 'Organic Cotton Bath Towels', price: 35.99 },
	];

	return (
		<div className="item-list">
			{items.map((item) => (
				<Item key={item.id} item={item} addItemToCart={addItemToCart} />
			))}
		</div>
	);
}

export default ItemList;
