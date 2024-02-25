import React from 'react';

function HangmanStatus({ wrongGuesses, maxWrongGuesses }) {
	return (
		<p>
			Wrong Guesses: {wrongGuesses} of {maxWrongGuesses}
		</p>
	);
}

export default HangmanStatus;
