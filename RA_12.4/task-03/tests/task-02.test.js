import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import App from '../src/App';

describe('Task Manager Statistics', () => {
	test('displays the correct initial task count', () => {
		render(<App />);
		expect(screen.getByText(/Number of tasks:/)).toHaveTextContent(
			'Number of tasks: 0'
		);
	});

	test('updates task count when new tasks are added with text', () => {
		render(<App />);

		const taskInput = screen.getByPlaceholderText('Add a new task');
		fireEvent.change(taskInput, { target: { value: 'Task 1' } });
		const addButton = screen.getByText('Add Task');
		fireEvent.click(addButton);

		fireEvent.change(taskInput, { target: { value: 'Task 2' } });
		fireEvent.click(addButton);

		expect(screen.getByText(/Number of tasks:/)).toHaveTextContent(
			'Number of tasks: 2'
		);
	});

	test('updates completed and pending task counts correctly', () => {
		render(<App />);

		const taskInput = screen.getByPlaceholderText('Add a new task');
		fireEvent.change(taskInput, { target: { value: 'Task 1' } });
		const addButton = screen.getByText('Add Task');
		fireEvent.click(addButton);

		let taskCheckboxes = screen.getAllByRole('checkbox');
		fireEvent.click(taskCheckboxes[0]);

		expect(screen.getByText(/Completed tasks:/)).toHaveTextContent(
			'Completed tasks: 1'
		);
		expect(screen.getByText(/Pending tasks:/)).toHaveTextContent(
			'Pending tasks: 0'
		);

		fireEvent.click(taskCheckboxes[0]);
		expect(screen.getByText(/Completed tasks:/)).toHaveTextContent(
			'Completed tasks: 0'
		);
		expect(screen.getByText(/Pending tasks:/)).toHaveTextContent(
			'Pending tasks: 1'
		);
	});
});
