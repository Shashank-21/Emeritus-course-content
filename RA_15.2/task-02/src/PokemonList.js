import React from 'react';
import PokemonItem from './PokemonItem';

const PokemonList = ({ pokemons }) => {
	return (
		<ul className="pokemon-list">
			{pokemons.map((pokemon, index) => (
				<PokemonItem key={pokemon.name} pokemon={pokemon} index={index} />
			))}
		</ul>
	);
};

export default PokemonList;
