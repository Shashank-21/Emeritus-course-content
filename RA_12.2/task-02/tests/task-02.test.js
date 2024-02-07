import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import FruitContainer from '../src/FruitContainer';

describe('FruitContainer Component', () => {
	test('calculates the total count correctly', () => {
		render(<FruitContainer />);
		const totalCountElement = screen.getByText('Total Fruits: 0');
		expect(totalCountElement).toBeInTheDocument();

		const incrementAppleButton = screen.getAllByText('+')[0];
		fireEvent.click(incrementAppleButton);
		expect(screen.getByText('Total Fruits: 1')).toBeInTheDocument();

		const incrementBananaButton = screen.getAllByText('+')[1];
		fireEvent.click(incrementBananaButton);
		expect(screen.getByText('Total Fruits: 2')).toBeInTheDocument();

		const decrementAppleButton = screen.getAllByText('-')[0];
		fireEvent.click(decrementAppleButton);
		expect(screen.getByText('Total Fruits: 1')).toBeInTheDocument();
	});

	test('resets total count when reset button is clicked', () => {
		render(<FruitContainer />);

		const incrementAppleButton = screen.getAllByText('+')[0];
		fireEvent.click(incrementAppleButton);
		fireEvent.click(incrementAppleButton);
		expect(screen.getByText('Total Fruits: 2')).toBeInTheDocument();

		const resetAppleButton = screen.getAllByText('Reset')[0];
		fireEvent.click(resetAppleButton);
		expect(screen.getByText('Total Fruits: 0')).toBeInTheDocument();
	});
});
