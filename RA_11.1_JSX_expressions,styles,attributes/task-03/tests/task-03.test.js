import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import WelcomeCard from '../src/WelcomeCard.js';

describe('WelcomeCard', () => {
	it('changes the background color of the paragraph when the button is clicked', () => {
		render(<WelcomeCard name="Alice" />);
		const colorToggleButton = screen.getByRole('button', {
			name: /switch color/i,
		});
		const styledParagraph = screen.getByText("Let's style this text!");
		expect(styledParagraph).toHaveStyle('background-color: yellow');
		fireEvent.click(colorToggleButton);
		expect(styledParagraph).toHaveStyle('background-color: mintcream');
		fireEvent.click(colorToggleButton);
		expect(styledParagraph).toHaveStyle('background-color: yellow');
	});
});
