import React from 'react';
import { render, screen } from '@testing-library/react';
import WelcomeCard from '../src/WelcomeCard';

describe('WelcomeCard', () => {
	it('applies yellow background color style to the paragraph', () => {
		render(<WelcomeCard name="Alice" />);
		const styledParagraph = screen.getByText("Let's style this text!");
		expect(styledParagraph).toHaveStyle('background-color: yellow');
	});
});
