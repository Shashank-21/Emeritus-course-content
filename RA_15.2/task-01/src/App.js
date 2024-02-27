import React, { useState, useEffect } from 'react';
import './App.css';
import PokemonList from './PokemonList';

const App = () => {
	const [pokemons, setPokemons] = useState([]);

	useEffect(() => {
		const fetchPokemons = async () => {
			const response = null; // Todo: Replace 'null'. Fetch the data from the url 'https://pokeapi.co/api/v2/pokemon?limit=1500' using the `fetch` function and store the result in the `response` variable. Since this is asynchronous, please use the await keyword before the function call
			const data = { results: [] }; // Todo: Remove the object after the `=` operator, and call the `json` function in the `response` object. Since this is asynchronous, please use the await keyword before the function call
			// Todo: set state 'pokemons' to the `results` parameter of the `data` object.
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
