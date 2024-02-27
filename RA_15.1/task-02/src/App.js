import React from 'react';
import PostList from './PostList';
import './App.css';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<h1>Blog Posts Viewer</h1>
			</header>
			<main>
				<PostList />
			</main>
		</div>
	);
}

export default App;
