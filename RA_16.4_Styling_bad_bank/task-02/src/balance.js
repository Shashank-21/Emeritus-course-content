import React, { useContext } from 'react';
import { UserContext } from './context';

function Balance() {
	const ctx = useContext(UserContext);
	return <h1>Balance</h1>;
}

export default Balance;
