import React from 'react';
import './EventCard.css';

const EventCard = (props) => {
	return (
		<div className="eventCard">
			{/* This div displays the title */}
			<div className="title">{props.title}</div>

			<div className="dateLocation">
				{/* Todo: Display the date here. Like the title, you can access the 'date' property from 'props' object by referring to `props.date` */}{' '}
				|{' '}
				{/* Todo: Display the date here. Like the title, you can access the 'location' property from 'props' object by referring to `props.location` */}
			</div>
			<div className="description">
				{/* Todo: Display the description here. Like the title, you can access the 'description' property from 'props' object by referring to `props.description` */}
			</div>
		</div>
	);
};

export default EventCard;
