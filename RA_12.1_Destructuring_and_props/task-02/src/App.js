import React from 'react';
import './App.css';
import EventCard from './EventCard';
import events from './events.json';

const App = () => {
	return (
		<div>
			<h1>Events</h1>
			<div className="appContainer">
				{events.map((event) => (
					<EventCard
						key={event.id}
						title={event.title}
						date={event.date}
						location={event.location}
						description={event.description}
					/>
				))}
			</div>
		</div>
	);
};

export default App;
