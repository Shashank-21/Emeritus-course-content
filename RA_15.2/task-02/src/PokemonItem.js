import React, { useState, useEffect } from 'react';

function PokemonItem({ pokemon }) {
	const [pokemonDetails, setPokemonDetails] = useState(null);
	const [isActive, setIsActive] = useState(false);

	useEffect(() => {
		const fetchPokemonDetails = async () => {
			if (isActive) {
				const response = await fetch(pokemon.url);
				const data = await response.json();
				setPokemonDetails(data);
			}
		};

		fetchPokemonDetails();
	}, [isActive, pokemon.url]);

	const toggleActive = () => {
		setIsActive(!isActive);
	};

	return (
		<li className="pokemon-item">
			<button className="pokemon-name" onClick={toggleActive}>
				{pokemon.name}
			</button>
			{isActive && pokemonDetails && (
				<div className="pokemon-details-card">
					<div className="pokemon-image">
						<img
							src={pokemonDetails.sprites.front_default}
							alt={pokemon.name}
						/>
					</div>
					<div className="pokemon-info">
						<div className="pokemon-column">
							<div className="pokemon-base">
								<span className="pokemon-stat">
									Base Experience: {pokemonDetails.base_experience}
								</span>
								<span className="pokemon-stat">
									Weight: {pokemonDetails.weight}
								</span>
							</div>
							<div className="pokemon-abilities">
								<h4>Abilities:</h4>
								<ul>
									{pokemonDetails.abilities.map((ability) => (
										<li key={ability.ability.name}>{ability.ability.name}</li>
									))}
								</ul>
							</div>
						</div>
						<div className="pokemon-column">
							<div className="pokemon-stats">
								<h4>Stats:</h4>
								<ul>
									{pokemonDetails.stats.map((stat) => (
										<li key={stat.stat.name}>
											{stat.stat.name}: {stat.base_stat}
										</li>
									))}
								</ul>
							</div>
						</div>
					</div>
				</div>
			)}
		</li>
	);
}

export default PokemonItem;
