import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from '../src/App.js';

describe('App Pagination Tests', () => {
	beforeEach(() => {
		global.fetch = jest.fn().mockImplementation((url) => {
			if (url.includes('offset=0')) {
				return Promise.resolve({
					ok: true,
					json: () =>
						Promise.resolve({
							results: Array.from({ length: 10 }, (_, i) => ({
								name: `pokemon-${i + 1}`,
							})),
						}),
				});
			} else if (url.includes('offset=10')) {
				return Promise.resolve({
					ok: true,
					json: () =>
						Promise.resolve({
							results: Array.from({ length: 10 }, (_, i) => ({
								name: `pokemon-${i + 11}`,
							})),
						}),
				});
			}
			return Promise.reject(new Error('fetch called with unexpected URL'));
		});
	});

	afterEach(() => {
		jest.clearAllMocks();
	});

	test('loads initial items correctly', async () => {
		render(<App />);

		await waitFor(() => {
			expect(screen.getByText(`pokemon-1`)).toBeInTheDocument();
		});
	});

	test('paginates to the next page correctly', async () => {
		render(<App />);

		await waitFor(() => {
			expect(screen.getByText(`pokemon-1`)).toBeInTheDocument();
		});
		fireEvent.click(screen.getByText('2'));

		await waitFor(() => {
			expect(screen.getByText(`pokemon-11`)).toBeInTheDocument();
		});
	});

	test('fetch is called with correct parameters for pagination', async () => {
		render(<App />);
		fireEvent.click(screen.getByText('2'));
		await waitFor(() => {
			expect(fetch).toHaveBeenCalledWith(expect.stringContaining('offset=10'));
		});
	});
});
