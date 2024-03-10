import React from 'react';
import { render, screen } from '@testing-library/react';
import NavBar from '../src/navbar';

describe('NavBar Component', () => {
	beforeEach(() => {
		render(<NavBar />);
	});

	test('renders navbar with correct class', () => {
		const navbar = screen.getByRole('navigation');
		expect(navbar).toHaveClass('navbar navbar-expand-lg navbar-light bg-light');
	});

	test('renders navbar collapse div with correct classes', () => {
		const navbarCollapse = document.getElementById('navbarNav');
		expect(navbarCollapse).toHaveClass('collapse navbar-collapse');
	});

	test('renders ul element with correct class', () => {
		const navList = screen.getByRole('list');
		expect(navList).toHaveClass('navbar-nav');
	});
});
