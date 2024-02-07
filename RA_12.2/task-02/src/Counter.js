import React from 'react';
import './Counter.css';

function Counter({ fruitName, count, setCount }) {
	const incrementCount = () => {
		setCount(fruitName, count + 1);
	};

	const decrementCount = () => {
		if (count > 0) {
			setCount(fruitName, count - 1);
		}
	};

	const resetCount = () => {
		setCount(fruitName, 0);
	};

	return (
		<div className="counter-container">
			<h2>
				{fruitName}: {count}
			</h2>
			<button onClick={incrementCount} className="increment-decrement-button">
				+
			</button>
			<button onClick={decrementCount} className="increment-decrement-button">
				-
			</button>
			<button onClick={resetCount} className="reset-button">
				Reset
			</button>
		</div>
	);
}

export default Counter;
