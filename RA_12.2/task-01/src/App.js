import React from 'react';
import FruitContainer from './FruitContainer';
import './Counter.css'; // Ensure this is the correct path

function App() {
	return (
		<div className="app-container">
			<h1 className="app-header">Fruit Counters</h1>
			<FruitContainer />
		</div>
	);
}

export default App;
