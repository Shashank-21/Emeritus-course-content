import React, { useContext } from 'react';
import { UserContext } from './context';
function AllData() {
	const ctx = useContext(UserContext);
	return (
		<>
			<h1>All Data</h1>
		</>
	);
}

export default AllData;
