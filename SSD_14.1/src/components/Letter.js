import React from 'react';

function Letter({ letter, handleGuess, isGuessed }) {
	return (
		<button
			className="LetterButton"
			onClick={() => handleGuess(letter)}
			disabled={isGuessed}
		>
			{letter}
		</button>
	);
}

export default Letter;
