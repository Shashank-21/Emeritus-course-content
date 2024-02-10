import React from 'react';
import './CartTotal.css';

function CartTotal({ cartItems }) {
	const totalPrice = cartItems.reduce(
		(acc, item) => acc + item.qty * item.price,
		0
	);

	return (
		<div className="cart-total">
			<h3>Total: ${totalPrice.toFixed(2)}</h3>
		</div>
	);
}

export default CartTotal;
