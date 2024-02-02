import React from 'react';
import './MovieCard.css';

function MovieCard({ title, showTime, screen, row, seat, imageUrl }) {
	return (
		<div className="movie-card">
			<div
				className="movie-header"
				style={{ backgroundImage: `url(${imageUrl})`, backgroundSize: 'cover' }}
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
						<h3 className="movie-title">{title}</h3>
					</a>
					<div className="imax-logo"></div>
				</div>
				<div className="movie-info">
					<div className="info-section">
						<label>Date & Time</label>
						<span>{showTime}</span>
					</div>
					<div className="info-section">
						<label>Screen</label>
						<span>{screen}</span>
					</div>
				</div>
			</div>
		</div>
	);
}

export default MovieCard;
