import React from 'react';
import { render, screen } from '@testing-library/react';
import { UserContext } from '../src/context';
import Deposit from '../src/deposit';

describe('Deposit Component', () => {
	const testUserContext = {
		users: [{ name: 'John Doe', balance: 100 }],
	};

	beforeEach(() => {
		render(
			<UserContext.Provider value={testUserContext}>
				<Deposit />
			</UserContext.Provider>
		);
	});

	test('renders the user context data', () => {
		const expectedDataRegex = new RegExp(
			`"users":\\s*\\[\\{\\s*"name":\\s*"John Doe",\\s*"balance":\\s*100\\s*\\}\\]`,
			'i'
		);
		expect(screen.getByText(expectedDataRegex)).toBeInTheDocument();
	});
});
