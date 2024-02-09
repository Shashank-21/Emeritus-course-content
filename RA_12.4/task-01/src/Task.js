import React from 'react';
import './Task.css';

function Task({ task, deleteTask, toggleTaskCompletion }) {
	return (
		<div>
			{/*Todo: Add the dynamic className to the parent `div`. It should be 'task' when the task is pending, and 'task completed' when the task is completed */}
			<input
				type="checkbox"
				checked={task.completed}
				// Todo: Add the 'onChange' prop to the input, which is an anonymous function that calls the `toggleTaskCompletion` with `task.id` as its parameter
				className="task-checkbox"
			/>
			<span className="task-text">{task.text}</span>
			<button onClick={() => deleteTask(task.id)} className="delete-task">
				Delete
			</button>
		</div>
	);
}

export default Task;
