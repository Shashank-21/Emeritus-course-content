import React from 'react';
import './CartItem.css';

function CartItem({ item }) {
	const subtotal = item.price * item.qty;

	return (
		<div className="cart-item">
			<div className="cart-item-info">
				<h4>{item.name}</h4>
				<p>${item.price.toFixed(2)} each</p>
			</div>
			<div className="controls">
				<span>{item.qty}</span>
			</div>
			<div className="cart-item-subtotal">Subtotal: ${subtotal.toFixed(2)}</div>
		</div>
	);
}

export default CartItem;
