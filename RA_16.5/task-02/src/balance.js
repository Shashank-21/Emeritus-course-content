import React, { useContext } from 'react';
import { UserContext } from './context';

function Balance() {
	const { user } = useContext(UserContext);

	return (
		<div className="container">
			{user ? (
				<div>
					<h2>Balance</h2>
					<p className="lead">Your current balance is: ${user.balance}</p>
				</div>
			) : (
				<div className="alert alert-warning" role="alert">
					You must be logged in to view the balance.
				</div>
			)}
		</div>
	);
}

export default Balance;
