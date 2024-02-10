import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import App from '../src/App';

describe('Shopping Cart - Remove Item Functionality', () => {
	test('removes an item from the cart', () => {
		render(<App />);
		const addItemButtons = screen.getAllByText('Add to Cart');
		if (addItemButtons.length > 0) {
			fireEvent.click(addItemButtons[0]);
		}
		const removeItemButton = screen.getByText('Remove');
		fireEvent.click(removeItemButton);
		expect(screen.queryByText('Subtotal:')).not.toBeInTheDocument();
	});
});
