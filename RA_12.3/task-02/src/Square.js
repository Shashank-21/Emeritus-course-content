import React from 'react';
import './Square.css';

const Square = ({ squareNumber, color, onRemove }) => {
	return (
		<div className="square" style={{ backgroundColor: color }}>
			<button className="remove-square" onClick={onRemove}>
				×
			</button>
			{squareNumber}
		</div>
	);
};

export default Square;
