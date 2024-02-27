import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Post from '../src/Post';

global.fetch = jest.fn(() =>
	Promise.resolve({
		json: () =>
			Promise.resolve([
				{
					id: 1,
					name: 'Commenter One',
					body: 'A comment on the post',
					postId: 1,
				},
			]),
	})
);

beforeEach(() => {
	fetch.mockClear();
});

describe('Post Component', () => {
	const mockPost = { id: 1, title: 'Test Post', body: 'This is a test post' };

	test('loads and displays comments when "Show Comments" is clicked', async () => {
		render(<Post post={mockPost} />);

		expect(
			screen.queryByText(/A comment on the post/i)
		).not.toBeInTheDocument();

		fireEvent.click(screen.getByText(/Show Comments/i));

		await waitFor(() => {
			expect(screen.getByText(/A comment on the post/i)).toBeInTheDocument();
		});

		expect(fetch).toHaveBeenCalledWith(
			`https://jsonplaceholder.typicode.com/posts/${mockPost.id}/comments`
		);
	});
});
