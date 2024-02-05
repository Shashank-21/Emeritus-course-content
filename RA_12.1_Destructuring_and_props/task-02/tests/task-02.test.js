import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import EventCard from '../src/EventCard.js';

describe('EventCard Component', () => {
	const eventProps = {
		title: 'Test Event',
		date: 'January 1, 2024',
		location: 'Test Location',
		description: 'This is a test description for the Test Event.',
	};

	test('renders the title correctly', () => {
		try {
			render(<EventCard {...eventProps} />);
			expect(screen.getByText(eventProps.title)).toBeInTheDocument();
		} catch (error) {
			throw new Error(
				'Have you included the destructured `title` prop in the EventCard component?'
			);
		}
	});

	test('renders the date and location correctly', () => {
		try {
			render(<EventCard {...eventProps} />);
			const dateLocationString = `${eventProps.date} | ${eventProps.location}`;
			expect(screen.getByText(dateLocationString)).toBeInTheDocument();
		} catch (error) {
			throw new Error(
				'Have you included destructured `date` and `location` props in the correct format in the EventCard component?\n Correct format is {date} | {location}'
			);
		}
	});

	test('renders the description correctly', () => {
		try {
			render(<EventCard {...eventProps} />);
			expect(screen.getByText(eventProps.description)).toBeInTheDocument();
		} catch (error) {
			throw new Error(
				'Have you included the destructured `description` prop in the EventCard component?'
			);
		}
	});
});
