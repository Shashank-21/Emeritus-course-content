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

	return (
		<div className="grid">
			{squares.map((square) => (
				<Square key={square.id} squareNumber={square.id} color={square.color} />
			))}
			<div className="add-square" onClick={addSquare}>
				+
			</div>
		</div>
	);
};

export default Grid;
