import React, { useContext } from 'react';
import { UserContext } from './context';

function Deposit() {
	const ctx = useContext(UserContext);
	return (
		<h1>
			Deposit
			<br />
			{JSON.stringify(ctx)}
		</h1>
	);
}

export default Deposit;
