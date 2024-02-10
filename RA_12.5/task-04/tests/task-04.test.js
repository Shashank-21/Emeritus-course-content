import React from 'react';
import { render } from '@testing-library/react';
import CartTotal from '../src/CartTotal';

describe('CartTotal - Calculating Total Price', () => {
	test('calculates the total price of cart items correctly', () => {
		const cartItems = [
			{ id: 1, name: 'Item 1', price: 10.0, qty: 2 },
			{ id: 2, name: 'Item 2', price: 5.5, qty: 1 },
			{ id: 3, name: 'Item 3', price: 20.0, qty: 3 },
		];

		const { getByText } = render(<CartTotal cartItems={cartItems} />);
		const totalPrice = cartItems
			.reduce((acc, item) => acc + item.qty * item.price, 0)
			.toFixed(2);

		expect(getByText(`Total: $${totalPrice}`)).toBeInTheDocument();
	});

	test('shows $0.00 when cart is empty', () => {
		const cartItems = [];
		const { getByText } = render(<CartTotal cartItems={cartItems} />);
		expect(getByText('Total: $0.00')).toBeInTheDocument();
	});
});
