import React, { useContext } from 'react';
import { UserContext } from './context';
import Card from './card';
function Home() {
	const ctx = useContext(UserContext);
	return (
		<>
			<Card
				// Todo: Add the following props to the Card component:
				// `txtcolor` should be "black"
				// `header` should be "BadBank Landing Module"
				// `title` should be "Welcome to the bank"
				// `text` should be "You can move around using the navigation bar."
				body={
					<img src="bank.png" className="img-fluid" alt="Responsive image" />
				}
			/>
		</>
	);
}
export default Home;
