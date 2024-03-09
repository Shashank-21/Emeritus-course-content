import React from 'react';
import { render, screen } from '@testing-library/react';
import { UserContext } from '../src/context';
import Login from '../src/login';

describe('Login Component', () => {
	const testUserContext = {
		users: [{ name: 'John Doe', balance: 100 }],
	};

	beforeEach(() => {
		render(
			<UserContext.Provider value={testUserContext}>
				<Login />
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
