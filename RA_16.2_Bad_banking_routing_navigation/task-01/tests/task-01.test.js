import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../src/App';

describe('App Routing', () => {
	test('renders Home component on root route', () => {
		window.history.pushState({}, '', '/');
		render(<App />);
		expect(
			screen.getByRole('heading', { name: /Welcome to Bad Bank/i, level: 1 })
		).toBeInTheDocument();
	});

	test('renders Login component on /login route', () => {
		window.history.pushState({}, '', '#/login');
		render(<App />);
		expect(
			screen.getByRole('heading', { name: /Login/i, level: 1 })
		).toBeInTheDocument();
	});

	test('renders AllData component on /alldata route', () => {
		window.history.pushState({}, '', '#/alldata');
		render(<App />);
		expect(
			screen.getByRole('heading', { name: /All Data/i, level: 1 })
		).toBeInTheDocument();
	});

	test('renders Withdraw component on /withdraw route', () => {
		window.history.pushState({}, '', '#/withdraw');
		render(<App />);
		expect(
			screen.getByRole('heading', { name: /Withdraw/i, level: 1 })
		).toBeInTheDocument();
	});

	test('renders Balance component on /balance route', () => {
		window.history.pushState({}, '', '#/balance');
		render(<App />);
		expect(
			screen.getByRole('heading', { name: /Balance/i, level: 1 })
		).toBeInTheDocument();
	});

	test('renders Deposit component on /deposit route', () => {
		window.history.pushState({}, '', '#/deposit');
		render(<App />);
		expect(
			screen.getByRole('heading', { name: /Deposit/i, level: 1 })
		).toBeInTheDocument();
	});

	test('renders CreateAccount component on /createaccount route', () => {
		window.history.pushState({}, '', '#/createaccount');
		render(<App />);
		expect(
			screen.getByRole('heading', { name: /Create Account/i, level: 1 })
		).toBeInTheDocument();
	});
});
