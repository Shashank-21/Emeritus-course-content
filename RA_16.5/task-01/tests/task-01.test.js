import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { UserContext } from '../src/context';
import Login from '../src/login';

describe('Login Component', () => {
	const mockLogin = jest.fn();
	const users = [
		{ name: 'John Doe', email: 'john@example.com', password: '123456' },
	];

	beforeEach(() => {
		mockLogin.mockClear();
		render(
			<UserContext.Provider
				value={{ users, user: null, login: mockLogin, logout: jest.fn() }}
			>
				<Login />
			</UserContext.Provider>
		);
	});

	test('renders login form', () => {
		expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
		expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
		expect(screen.getByRole('button', { name: /login/i })).toBeInTheDocument();
	});

	test('allows user to enter email and password', () => {
		fireEvent.change(screen.getByLabelText(/email/i), {
			target: { value: 'john@example.com' },
		});
		fireEvent.change(screen.getByLabelText(/password/i), {
			target: { value: '123456' },
		});

		expect(screen.getByLabelText(/email/i).value).toBe('john@example.com');
		expect(screen.getByLabelText(/password/i).value).toBe('123456');
	});

	test('calls login function with correct credentials', () => {
		fireEvent.change(screen.getByLabelText(/email/i), {
			target: { value: 'john@example.com' },
		});
		fireEvent.change(screen.getByLabelText(/password/i), {
			target: { value: '123456' },
		});
		fireEvent.click(screen.getByRole('button', { name: /login/i }));

		expect(mockLogin).toHaveBeenCalledWith(users[0]);
	});

	test('displays error with incorrect credentials', () => {
		fireEvent.change(screen.getByLabelText(/email/i), {
			target: { value: 'wrong@example.com' },
		});
		fireEvent.change(screen.getByLabelText(/password/i), {
			target: { value: 'wrong' },
		});
		fireEvent.click(screen.getByRole('button', { name: /login/i }));

		expect(screen.getByRole('alert')).toHaveTextContent(
			'Invalid username or password'
		);
		expect(mockLogin).not.toHaveBeenCalled();
	});
});
