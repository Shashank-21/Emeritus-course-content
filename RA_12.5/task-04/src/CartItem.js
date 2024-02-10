import React from 'react';
import './CartItem.css';

function CartItem({ item, updateItemCount, removeItemFromCart }) {
	const subtotal = item.price * item.qty;

	return (
		<div className="cart-item">
			<div className="cart-item-info">
				<h4>{item.name}</h4>
				<p>${item.price.toFixed(2)} each</p>
			</div>
			<div className="controls">
				<button
					onClick={() => updateItemCount(item.id, Math.max(1, item.qty - 1))}
				>
					-
				</button>
				<span>{item.qty}</span>
				<button onClick={() => updateItemCount(item.id, item.qty + 1)}>
					+
				</button>
			</div>
			<div className="cart-item-subtotal">Subtotal: ${subtotal.toFixed(2)}</div>
			<button
				onClick={() => removeItemFromCart(item.id)}
				className="remove-item"
			>
				Remove
			</button>
		</div>
	);
}

export default CartItem;
