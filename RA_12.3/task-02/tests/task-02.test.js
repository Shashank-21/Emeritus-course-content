import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Grid from '../src/Grid';

describe('Grid Component', () => {
	test('can add and then remove a square', () => {
		const { container } = render(<Grid />);
		fireEvent.click(screen.getByText('+'));
		let squares = container.querySelectorAll('.square');
		expect(squares.length).toBe(1);

		fireEvent.click(squares[0].querySelector('.remove-square'));
		squares = container.querySelectorAll('.square');
		expect(squares.length).toBe(0);
	});

	test('removes the correct square', () => {
		const { container } = render(<Grid />);

		fireEvent.click(screen.getByText('+'));
		fireEvent.click(screen.getByText('+'));
		fireEvent.click(screen.getByText('+'));
		let squares = container.querySelectorAll('.square');
		expect(squares.length).toBe(3);

		const removeButtonSecondSquare = squares[1].querySelector('.remove-square');
		fireEvent.click(removeButtonSecondSquare);
		squares = container.querySelectorAll('.square');
		expect(squares.length).toBe(2);

		expect(screen.queryByText('2')).not.toBeInTheDocument();
	});
});
