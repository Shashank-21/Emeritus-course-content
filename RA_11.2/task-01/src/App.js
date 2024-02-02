import React from 'react';
import MovieCard from './MovieCard.solution.js';

function App() {
	return (
		<div className="container">
			<MovieCard
				title="Casablanca"
				showTime="Sun 8 Feb - 10:00PM"
				screen="4"
				row="F"
				seat="21,21"
				imageUrl="https://resizing.flixster.com/1AihiP2VoZOgyhOx4EBb4Oyj57g=/206x305/v2/https://flxt.tmsimg.com/assets/p651_p_v13_az.jpg"
			/>
			<MovieCard
				title="The Wizard of Oz"
				showTime="Thu 12 Feb - 10:00PM"
				screen="2"
				row="C"
				seat="8,9"
				imageUrl="https://resizing.flixster.com/ulqUDhVVuKGWDLeBtkp9KjyReo8=/206x305/v2/https://flxt.tmsimg.com/NowShowing/129612/129612_ab.jpg"
			/>
		</div>
	);
}

export default App;
