import React from 'react';
import { render, waitFor } from '@testing-library/react';
import App from '../src/App';

global.fetch = jest.fn(() =>
	Promise.resolve({
		json: () =>
			Promise.resolve({
				results: [
					{ name: 'bulbasaur', url: 'https://pokeapi.co/api/v2/pokemon/1/' },
				],
			}),
	})
);

beforeEach(() => {
	fetch.mockClear();
});

describe('App component', () => {
	test('fetches Pokemon data from the API', async () => {
		render(<App />);
		await waitFor(() => {
			expect(fetch).toHaveBeenCalledWith(
				'https://pokeapi.co/api/v2/pokemon?limit=1500'
			);
		});
	});

	test('renders Pokemon data after fetch', async () => {
		const { getByText } = render(<App />);
		await waitFor(() => {
			expect(getByText('bulbasaur')).toBeInTheDocument();
		});
	});

	test('calls fetch exactly once', async () => {
		render(<App />);
		await waitFor(() => {
			expect(fetch).toHaveBeenCalledTimes(1);
		});
	});
});
