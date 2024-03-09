import React from 'react';
import { render, screen } from '@testing-library/react';
import { UserContext } from '../src/context';
import Balance from '../src/balance';

describe('Balance Component', () => {
	const testUserContext = {
		users: [{ name: 'John Doe', balance: 100 }],
	};

	beforeEach(() => {
		render(
			<UserContext.Provider value={testUserContext}>
				<Balance />
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
