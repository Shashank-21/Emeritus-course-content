import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Task from '../src/Task.solution';

describe('Task Component', () => {
	const mockDeleteTask = jest.fn();
	const mockToggleTaskCompletion = jest.fn();
	const taskData = { id: 1, text: 'Test Task', completed: false };

	test('renders with correct class based on completion status', () => {
		const { rerender } = render(
			<Task
				task={taskData}
				deleteTask={mockDeleteTask}
				toggleTaskCompletion={mockToggleTaskCompletion}
			/>
		);

		expect(screen.getByText('Test Task').parentNode).toHaveClass('task');

		taskData.completed = true;
		rerender(
			<Task
				task={taskData}
				deleteTask={mockDeleteTask}
				toggleTaskCompletion={mockToggleTaskCompletion}
			/>
		);

		expect(screen.getByText('Test Task').parentNode).toHaveClass(
			'task completed'
		);
	});

	test('toggles task completion on checkbox change', () => {
		render(
			<Task
				task={taskData}
				deleteTask={mockDeleteTask}
				toggleTaskCompletion={mockToggleTaskCompletion}
			/>
		);
		fireEvent.click(screen.getByRole('checkbox'));
		expect(mockToggleTaskCompletion).toHaveBeenCalledWith(taskData.id);
	});
});
