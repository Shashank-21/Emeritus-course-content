import React, { useState } from 'react';
import TaskForm from './TaskForm';
import Task from './Task';
import './App.css';

function App() {
	const [tasks, setTasks] = useState([]);

	const addTask = (task) => {
		setTasks([...tasks, { id: Date.now(), text: task, completed: false }]);
	};

	const deleteTask = (taskId) => {
		setTasks(tasks.filter((task) => task.id !== taskId));
	};

	const toggleTaskCompletion = (taskId) => {
		setTasks(
			tasks.map((task) =>
				task.id === taskId ? { ...task, completed: !task.completed } : task
			)
		);
	};

	return (
		<div className="app">
			<h1>Task Manager</h1>
			<p>Number of tasks: {tasks.length}</p>
			<p>
				Completed tasks:{' '}
				{/*Todo: Add the count of completed tasks here ('complete' property for the task is true) */}
			</p>
			<p>
				Pending tasks:{' '}
				{/*Todo: Add the count of tasks for which the 'complete' property is false here */}
			</p>
			<TaskForm addTask={addTask} />
			<div className="tasks">
				{tasks.map((task) => (
					<Task
						key={task.id}
						task={task}
						deleteTask={deleteTask}
						toggleTaskCompletion={toggleTaskCompletion}
					/>
				))}
			</div>
		</div>
	);
}

export default App;
