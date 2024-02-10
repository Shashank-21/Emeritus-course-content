import React, { useState } from 'react';
import './WelcomeCard.css'; // Import the CSS file here

function WelcomeCard({ name }) {
	const [backgroundColor, setBackgroundColor] = useState('yellow');

	const handleClick = () => {
		setBackgroundColor((curr) => {
			return curr === 'yellow' ? 'mintcream' : 'yellow';
		});
	};

	return (
		<div className="welcome-card">
			<h1>Welcome, {name}!</h1>
			<p style={{ backgroundColor }}>Let's style this text!</p>
			{/* Todo: Add the 'onClick' attribute to the button and pass the function 'handleClick' to it*/}
			<button className="welcome-button">Switch color</button>
		</div>
	);
}

export default WelcomeCard;
