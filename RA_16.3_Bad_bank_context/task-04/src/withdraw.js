import React, { useContext } from 'react';
import { UserContext } from './context';

function Withdraw() {
	// Todo: Call the `useContext` hook with the `UserContext` object, and store it in a variable. Refer to alldata.js for example.
	return (
		<h1>
			Withdraw
			{/* Todo: add a <br /> element, and render the stringified version of the variable where the user context is stored. Refer to alldata.js for example */}
		</h1>
	);
}

export default Withdraw;
