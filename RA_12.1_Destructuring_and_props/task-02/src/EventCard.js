import React from 'react';
import './EventCard.css';

const EventCard = ({ title, date, location, description }) => {
	return (
		<div className="eventCard">
			{/* Todo: Replace the `props.title` with the destructured `title` attribute*/}
			<div className="title">{props.title}</div>

			<div className="dateLocation">
				{/* Todo: Replace the `props.date` with the destructured `date` attribute*/}
				{props.date}| {props.location}
				{/* Todo: Replace the `props.location` with the destructured `location` attribute*/}
			</div>
			<div className="description">
				{/* Todo: Replace the `props.description` with the destructured `description` attribute*/}
				{props.description}
			</div>
		</div>
	);
};

export default EventCard;
