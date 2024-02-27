import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import PostList from '../src/PostList';

global.fetch = jest.fn(() =>
	Promise.resolve({
		json: () =>
			Promise.resolve([
				{ id: 1, title: 'Post 1', body: 'This is a mock post' },
			]),
	})
);

beforeEach(() => {
	fetch.mockClear();
});

describe('PostList', () => {
	test('fetches and displays posts', async () => {
		render(<PostList />);
		const postElement = await waitFor(() =>
			screen.getByText(/This is a mock post/i)
		);
		expect(postElement).toBeInTheDocument();
	});
});
