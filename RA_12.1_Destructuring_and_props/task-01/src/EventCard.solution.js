import React from 'react';
import './EventCard.css';

const EventCard = (props) => {
	return (
		<div className="eventCard">
			<div className="title">{props.title}</div>
			<div className="dateLocation">
				{props.date} | {props.location}
			</div>
			<div className="description">{props.description}</div>
		</div>
	);
};

export default EventCard;
