import React, { useState, useEffect } from 'react';
import './App.css';
import PokemonList from './PokemonList';

const App = () => {
	const [pokemons, setPokemons] = useState([]);

	useEffect(() => {
		const fetchPokemons = async () => {
			const response = await fetch(
				'https://pokeapi.co/api/v2/pokemon?limit=1500'
			);
			// Todo: Change the limit parameter of the url to 10, to fetch only 10 pokemons at a time
			const data = await response.json();
			setPokemons(data.results);
		};

		fetchPokemons();
	}, []);

	return (
		<div className="app">
			<h1>Pokémon List</h1>
			<PokemonList pokemons={pokemons} />
		</div>
	);
};

export default App;
