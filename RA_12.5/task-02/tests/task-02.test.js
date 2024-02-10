import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import App from '../src/App.solution';

describe('Shopping Cart - Update Item Count Functionality', () => {
	test('increases an item count in the cart', () => {
		render(<App />);
		const addItemButton = screen.getAllByText('Add to Cart')[0];
		fireEvent.click(addItemButton);

		const increaseQtyButton = screen.getAllByText('+')[0];
		fireEvent.click(increaseQtyButton);

		const quantityDisplay = screen.getByText('2');
		expect(quantityDisplay).toBeInTheDocument();
	});

	test('decreases an item count in the cart', () => {
		render(<App />);
		const addItemButton = screen.getAllByText('Add to Cart')[0];
		fireEvent.click(addItemButton);

		const increaseQtyButton = screen.getAllByText('+')[0];
		fireEvent.click(increaseQtyButton);
		fireEvent.click(increaseQtyButton);
		fireEvent.click(increaseQtyButton);

		const decreaseQtyButton = screen.getAllByText('-')[0];
		fireEvent.click(decreaseQtyButton);

		const quantityDisplay = screen.getByText('3');
		expect(quantityDisplay).toBeInTheDocument();
	});
});
