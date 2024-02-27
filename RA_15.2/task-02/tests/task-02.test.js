import React from 'react';
import { render, waitFor, screen } from '@testing-library/react';
import App from '../src/App';

global.fetch = jest.fn((url) =>
	url === 'https://pokeapi.co/api/v2/pokemon?limit=10'
		? Promise.resolve({
				json: () =>
					Promise.resolve({
						results: Array(10)
							.fill()
							.map((_, i) => ({
								name: `pokemon-${i + 1}`,
								url: `https://pokeapi.co/api/v2/pokemon/${i + 1}`,
							})),
					}),
			})
		: Promise.reject(new Error('fetch called with incorrect URL'))
);

beforeEach(() => {
	fetch.mockClear();
});

test('fetch is called with correct URL', async () => {
	render(<App />);
	await waitFor(() =>
		expect(fetch).toHaveBeenCalledWith(
			'https://pokeapi.co/api/v2/pokemon?limit=10'
		)
	);
});

test('renders exactly 10 pokemons', async () => {
	render(<App />);
	const pokemonItems = await waitFor(() => screen.getAllByText(/pokemon-/i));
	expect(pokemonItems.length).toBe(10);
});

test('fails if fetch is called with incorrect URL', async () => {
	render(<App />);
	await waitFor(() =>
		expect(fetch).not.toHaveBeenCalledWith(
			'https://pokeapi.co/api/v2/pokemon?limit=1500'
		)
	);
});
