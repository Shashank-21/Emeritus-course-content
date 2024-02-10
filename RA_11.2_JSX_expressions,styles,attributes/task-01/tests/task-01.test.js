import React from 'react';
import { render, screen } from '@testing-library/react';
import WelcomeCard from '../src/WelcomeCard.js';

describe('WelcomeCard', () => {
	it('renders a greeting message with the name passed as a prop', () => {
		render(<WelcomeCard name="Steve" />);

		const greetingMessage = screen.getByText(/welcome, steve!/i);
		expect(greetingMessage).toBeInTheDocument();
	});
});
