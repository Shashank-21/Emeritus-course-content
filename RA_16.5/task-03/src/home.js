import React, { useContext } from 'react';
import { UserContext } from './context';
import Card from './card';
function Home() {
	const ctx = useContext(UserContext);
	return (
		<>
			<Card
				txtcolor="black"
				header="BadBank Landing Module"
				title="Welcome to the bank"
				text="You can move around using the navigation bar."
				body={
					<img src="bank.png" className="img-fluid" alt="Responsive image" />
				}
			/>
		</>
	);
}
export default Home;
