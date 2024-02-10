import React from 'react';
import './WelcomeCard.css'; // Import the CSS file here

function WelcomeCard({ name }) {
	return (
		<div className="welcome-card">
			<h1>Welcome, {name}!</h1>
			{/* Todo: Add a style to the 'p' tag' making its background color yellow*/}
			<p style={{ backgroundColor: 'yellow' }}>Let's style this text!</p>
		</div>
	);
}

export default WelcomeCard;
