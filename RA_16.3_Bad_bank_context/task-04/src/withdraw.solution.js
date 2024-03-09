import React, { useContext } from 'react';
import { UserContext } from './context';

function Withdraw() {
	const ctx = useContext(UserContext);
	return (
		<h1>
			Withdraw
			<br />
			{JSON.stringify(ctx)}
		</h1>
	);
}

export default Withdraw;
