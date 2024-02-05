import React from 'react';
import './EventCard.css';

const EventCard = ({ title, date, location, description }) => {
	return (
		<div className="eventCard">
			<div className="title">{title}</div>
			<div className="dateLocation">
				{date} | {location}
			</div>
			<div className="description">{description}</div>
		</div>
	);
};

export default EventCard;
