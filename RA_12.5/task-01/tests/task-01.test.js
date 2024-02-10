import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import App from '../src/App.solution';

describe('Shopping Cart - Add Item Functionality', () => {
	test('adds an item to the cart and updates cart item count correctly', async () => {
		const { container } = render(<App />);
		const addButton = screen.getAllByText('Add to Cart')[0];
		fireEvent.click(addButton);
		const controls = container.querySelectorAll('.controls span');
		expect(controls[0]).toHaveTextContent('1');
	});

	test('adds the same item to the cart twice and updates quantity', async () => {
		const { container } = render(<App />);
		const addButton = screen.getAllByText('Add to Cart')[0];
		fireEvent.click(addButton);
		fireEvent.click(addButton);
		const updatedControls = container.querySelectorAll('.controls span');
		expect(updatedControls[0]).toHaveTextContent('2');
	});
});
