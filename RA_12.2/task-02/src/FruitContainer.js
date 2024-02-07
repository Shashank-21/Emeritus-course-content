import React, { useState } from 'react';
import Counter from './Counter';

function FruitContainer() {
	const initialCounts = {
		Apple: 0,
		Banana: 0,
		Orange: 0,
		Grape: 0,
	};

	const [fruitCounts, setFruitCounts] = useState(initialCounts);

	const setCount = (fruit, newCount) => {
		setFruitCounts((prevCounts) => ({
			...prevCounts,
			[fruit]: newCount,
		}));
	};

	let totalCount = 0;
	// Todo: calculate the total count of all the fruits

	return (
		<>
			<div className="fruit-container">
				{Object.entries(fruitCounts).map(([fruitName, count]) => (
					<Counter
						key={fruitName}
						fruitName={fruitName}
						count={count}
						setCount={setCount}
					/>
				))}
			</div>
			<div className="total-fruits">Total Fruits: {totalCount}</div>
		</>
	);
}

export default FruitContainer;
