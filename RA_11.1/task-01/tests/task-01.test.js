import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import LikeButton from '../src/LikeButton';

describe('LikeButton Component', () => {
	test('displays "You liked this." after clicking the "Like" button', () => {
		render(<LikeButton />);
		const likeButton = screen.getByText('Like');
		fireEvent.click(likeButton);
		expect(screen.getByText('You liked this.')).toBeInTheDocument();
	});
});
