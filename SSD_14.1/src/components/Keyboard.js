import React from 'react';
import Letter from './Letter';

function Keyboard({ handleGuess, guessedLetters }) {
	const letters = 'abcdefghijklmnopqrstuvwxyz'.split('');

	return (
		<div className="Keyboard">
			{letters.map((letter) => (
				<Letter
					key={letter}
					letter={letter}
					handleGuess={handleGuess}
					isGuessed={guessedLetters.includes(letter)}
				/>
			))}
		</div>
	);
}

export default Keyboard;
