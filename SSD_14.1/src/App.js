import React, { useState, useEffect } from 'react';
import WordDisplay from './components/WordDisplay';
import Keyboard from './components/Keyboard';
import HangmanStatus from './components/HangmanStatus';
import './App.css';

function App() {
	const secretWords = ['reactjs', 'coding', 'fullstack', 'submit'];
	const [secretWord] = useState(
		secretWords[Math.floor(Math.random() * secretWords.length)]
	);
	console.log(secretWord);
	const [guessedLetters, setGuessedLetters] = useState([]);
	const [wrongGuesses, setWrongGuesses] = useState(0);
	const maxWrongGuesses = 6;

	const handleGuess = (letter) => {
		if (!guessedLetters.includes(letter)) {
			setGuessedLetters([...guessedLetters, letter]);
			if (!secretWord.includes(letter)) {
				setWrongGuesses(wrongGuesses + 1);
			}
		}
	};

	useEffect(() => {
		const hasWon = secretWord
			.split('')
			.every((letter) => guessedLetters.includes(letter));
		if (hasWon) {
			alert("Congratulations! You've won!");
		}

		if (wrongGuesses >= maxWrongGuesses) {
			alert("Sorry! You've lost. The word was " + secretWord);
		}
	}, [guessedLetters, wrongGuesses, secretWord]);

	return (
		<div className="App">
			<h1>Hangman Game</h1>
			<WordDisplay secretWord={secretWord} guessedLetters={guessedLetters} />
			<HangmanStatus
				wrongGuesses={wrongGuesses}
				maxWrongGuesses={maxWrongGuesses}
			/>
			<Keyboard handleGuess={handleGuess} guessedLetters={guessedLetters} />
		</div>
	);
}

export default App;
