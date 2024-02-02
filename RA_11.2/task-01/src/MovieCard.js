import React from 'react';
import './MovieCard.css';

function MovieCard({ title, showTime, screen, row, seat, imageUrl }) {
	return (
		<div className="movie-card">
			<div
				className="movie-header"
				style={{
					backgroundImage: `url(${
						{
							/*Todo: add the title here */
						}
					})`,
					backgroundSize: 'cover',
				}}
			>
				<div className="header-icon-container">
					<a href="#">
						<i className="material-icons header-icon"></i>
					</a>
				</div>
			</div>
			<div className="movie-content">
				<div className="movie-content-header">
					<a href="#">
						<h3 className="movie-title">{/*Todo: add the title here */}</h3>
					</a>
					<div className="imax-logo"></div>
				</div>
			</div>
		</div>
	);
}

export default MovieCard;
