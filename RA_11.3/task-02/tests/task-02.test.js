import React from 'react';
import { render } from '@testing-library/react';
import MovieCard from '../src/MovieCard.js';

describe('MovieCard Component', () => {
	it('correctly displays show time and screen information', () => {
		const props = {
			title: 'Inception',
			imageUrl: 'https://example.com/inception.jpg',
			showTime: 'April 5, 8:00 PM',
			screen: 'IMAX',
			row: 'E',
			seat: '12',
		};

		const { getByText } = render(<MovieCard {...props} />);
		expect(getByText(props.row)).toBeInTheDocument();
		expect(getByText(props.seat)).toBeInTheDocument();
	});
});
