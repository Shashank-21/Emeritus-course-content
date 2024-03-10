import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../src/home.solution';
import { UserContext } from '../src/context';

jest.mock('../src/card', () => (props) => (
	<div data-testid="card" {...props}>
		Card Component
		<div>{props.body}</div>
	</div>
));

describe('Home Component', () => {
	const userContextValue = {};

	beforeEach(() => {
		render(
			<UserContext.Provider value={userContextValue}>
				<Home />
			</UserContext.Provider>
		);
	});

	test('Card component receives the correct txtcolor prop', () => {
		const cardComponent = screen.getByTestId('card');
		expect(cardComponent).toHaveAttribute('txtcolor', 'black');
	});

	test('Card component receives the correct header prop', () => {
		const cardComponent = screen.getByTestId('card');
		expect(cardComponent).toHaveAttribute('header', 'BadBank Landing Module');
	});

	test('Card component receives the correct title prop', () => {
		const cardComponent = screen.getByTestId('card');
		expect(cardComponent).toHaveAttribute('title', 'Welcome to the bank');
	});

	test('Card component receives the correct text prop', () => {
		const cardComponent = screen.getByTestId('card');
		expect(cardComponent).toHaveAttribute(
			'text',
			'You can move around using the navigation bar.'
		);
	});
});
