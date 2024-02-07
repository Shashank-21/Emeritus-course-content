import React from 'react';
import Counter from './Counter';

function FruitContainer() {
	const fruits = ['Apple', 'Banana', 'Orange', 'Grape'];

	return (
		<div className="fruit-container">
			{fruits.map((fruit) => (
				<Counter key={fruit} fruitName={fruit} />
			))}
		</div>
	);
}

export default FruitContainer;
