import React, { useState } from 'react';
import Square from './Square';
import './Grid.css';

const Grid = () => {
	const [squares, setSquares] = useState([]);

	const addSquare = () => {
		const newSquare = {
			id: squares.length + 1,
			color: 'skyblue',
		};
		setSquares([...squares, newSquare]);
	};

	const removeSquare = (id) => {
		// Todo: set state 'squares' to the new filtered array that doesn't contain the square with the given id.
	};

	return (
		<div className="grid">
			{squares.map((square) => (
				<Square
					key={square.id}
					squareNumber={square.id}
					color={square.color}
					// Todo: add the `onRemove` prop to the Square component.
				/>
			))}
			<div className="add-square" onClick={addSquare}>
				+
			</div>
		</div>
	);
};

export default Grid;
