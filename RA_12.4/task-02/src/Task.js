import React from 'react';
import './Task.css';

function Task({ task, deleteTask, toggleTaskCompletion }) {
	return (
		<div className={`task ${task.completed ? 'completed' : ''}`}>
			<input
				type="checkbox"
				checked={task.completed}
				onChange={() => toggleTaskCompletion(task.id)}
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
