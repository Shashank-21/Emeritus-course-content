import React from 'react';

function WordDisplay({ secretWord, guessedLetters }) {
	const displayedWord = secretWord
		.split('')
		.map((letter) => (guessedLetters.includes(letter) ? letter : '_'))
		.join(' ');
	return <p>Guess the word: {displayedWord}</p>;
}

export default WordDisplay;
