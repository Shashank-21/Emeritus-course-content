import React from 'react';
import CartItem from './CartItem';
import './Cart.css';

function Cart({ cartItems, updateItemCount, removeItemFromCart }) {
	return (
		<div className="cart">
			<h2>Your Cart</h2>
			{cartItems.map((item) => (
				<CartItem
					key={item.id}
					item={item}
					updateItemCount={updateItemCount}
					removeItemFromCart={removeItemFromCart}
				/>
			))}
		</div>
	);
}

export default Cart;
