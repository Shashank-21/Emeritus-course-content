import React, { useState } from 'react';
import './Counter.css';

function Counter({ fruitName }) {
	const [count, setCount] = useState(0);

	const incrementCount = () => {
		setCount(count + 1);
	};

	const decrementCount = () => {
		if (count > 0) {
			setCount(count - 1);
		}
	};

	const resetCount = () => {
		setCount(0);
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
