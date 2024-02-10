import React from 'react';
import './CartTotal.css';

function CartTotal({ cartItems }) {
	const totalPrice = -1; // Todo: Replace -1 with the calculated total of all cart items.

	return (
		<div className="cart-total">
			<h3>Total: ${totalPrice.toFixed(2)}</h3>
		</div>
	);
}

export default CartTotal;
