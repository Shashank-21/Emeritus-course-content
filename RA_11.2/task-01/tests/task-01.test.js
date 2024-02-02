import React from 'react';
import { render } from '@testing-library/react';
import MovieCard from '../src/MovieCard.js';

describe('MovieCard Component', () => {
	it('displays the correct background image', () => {
		const title = 'Inception';
		const imageUrl = 'https://example.com/inception.jpg';
		const { container } = render(
			<MovieCard
				title={title}
				imageUrl={imageUrl}
				showTime="9:00 PM"
				screen="Screen 5"
				row="F"
				seat="12"
			/>
		);

		const movieHeader = container.querySelector('.movie-header');
		expect(movieHeader).toHaveStyle(`background-image: url(${imageUrl})`);
	});
	it('renders the movie title correctly', () => {
		const title = 'Inception';
		const { getByText } = render(<MovieCard title={title} />);
		expect(getByText(title)).toBeInTheDocument();
	});
});
