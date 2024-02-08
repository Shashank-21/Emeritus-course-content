import React from 'react';
import './Square.css';

const Square = ({ squareNumber, color }) => {
	return (
		<div className="square" style={{ backgroundColor: color }}>
			{squareNumber}
		</div>
	);
};

export default Square;
