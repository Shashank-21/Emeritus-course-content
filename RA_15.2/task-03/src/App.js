import React, { useState, useEffect } from 'react';
import './App.css';
import PokemonList from './PokemonList';

const App = () => {
	const [pokemons, setPokemons] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const limit = 10;
	const totalPages = 130;

	useEffect(() => {
		const fetchPokemons = async () => {
			const offset = 0; //Todo: Replace 0, calculate offset based on the value of the 'currentPage' variable.
			const response = await fetch(
				`https://pokeapi.co/api/v2/pokemon?limit=${limit}`
			); //Todo: Include the offset in the url after the limit part
			const data = await response.json();
			setPokemons(data.results);
		};

		fetchPokemons();
	}, [currentPage]);

	const handlePageClick = (page) => {
		setCurrentPage(page);
	};

	const renderPageNumbers = () => {
		const pages = [];
		const visiblePages = 10;
		let startPage = currentPage - 5 < 1 ? 1 : currentPage - 5;
		let endPage =
			startPage + visiblePages - 1 > totalPages
				? totalPages
				: startPage + visiblePages - 1;

		if (endPage - startPage + 1 < visiblePages) {
			startPage =
				endPage - visiblePages + 1 <= 0 ? 1 : endPage - visiblePages + 1;
		}

		if (startPage > 1) {
			pages.push(
				<button key="start" onClick={() => handlePageClick(1)}>
					1
				</button>
			);
			if (startPage > 2) {
				pages.push(<span key="dot1">...</span>);
			}
		}

		for (let i = startPage; i <= endPage; i++) {
			pages.push(
				<button
					key={i}
					onClick={() => handlePageClick(i)}
					className={currentPage === i ? 'active' : ''}
				>
					{i}
				</button>
			);
		}

		if (endPage < totalPages) {
			if (endPage < totalPages - 1) {
				pages.push(<span key="dot2">...</span>);
			}
			pages.push(
				<button key="end" onClick={() => handlePageClick(totalPages)}>
					{totalPages}
				</button>
			);
		}

		return pages;
	};

	return (
		<div className="app">
			<h1>Pokémon List</h1>
			<PokemonList pokemons={pokemons} />
			<div className="pagination">{renderPageNumbers()}</div>
		</div>
	);
};

export default App;
