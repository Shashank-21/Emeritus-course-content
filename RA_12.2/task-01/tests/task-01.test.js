import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Counter from '../src/Counter';

describe('Counter Component', () => {
	test('renders the count', () => {
		render(<Counter fruitName="Apple" />);
		const countElement = screen.getByText(/apple: 0/i);
		expect(countElement).toBeInTheDocument();
	});

	test('increments the count', () => {
		render(<Counter fruitName="Apple" />);
		const incrementButton = screen.getByText('+');
		fireEvent.click(incrementButton);
		const countElement = screen.getByText(/apple: 1/i);
		expect(countElement).toBeInTheDocument();
	});

	test('decrements the count', () => {
		render(<Counter fruitName="Apple" />);
		const incrementButton = screen.getByText('+');
		fireEvent.click(incrementButton);
		const decrementButton = screen.getByText('-');
		fireEvent.click(decrementButton);
		const countElement = screen.getByText(/apple: 0/i);
		expect(countElement).toBeInTheDocument();
	});

	test('does not decrement below zero', () => {
		render(<Counter fruitName="Apple" />);
		const decrementButton = screen.getByText('-');
		fireEvent.click(decrementButton);
		const countElement = screen.getByText(/apple: 0/i);
		expect(countElement).toBeInTheDocument();
	});

	test('resets the count', () => {
		render(<Counter fruitName="Apple" />);
		const incrementButton = screen.getByText('+');
		fireEvent.click(incrementButton);
		fireEvent.click(incrementButton);
		const resetButton = screen.getByText(/reset/i);
		fireEvent.click(resetButton);
		const countElement = screen.getByText(/apple: 0/i);
		expect(countElement).toBeInTheDocument();
	});
});
