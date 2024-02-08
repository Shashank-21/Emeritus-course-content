import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Grid from '../src/Grid';

describe('Grid Component', () => {
	test('initial render without squares', () => {
		const { container } = render(<Grid />);
		const squares = container.querySelectorAll('.square');
		expect(squares).toHaveLength(0);
	});

	test('adds a square on "+" button click', () => {
		const { container } = render(<Grid />);
		fireEvent.click(screen.getByText('+'));
		const squaresAfterAdd = container.querySelectorAll('.square');
		expect(squaresAfterAdd).toHaveLength(1);
	});

	test('correctly assigns squareNumber to each square', () => {
		render(<Grid />);
		fireEvent.click(screen.getByText('+'));
		fireEvent.click(screen.getByText('+'));
		fireEvent.click(screen.getByText('+'));
		expect(screen.getByText('1')).toBeInTheDocument();
		expect(screen.getByText('2')).toBeInTheDocument();
		expect(screen.getByText('3')).toBeInTheDocument();
	});
});
