import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import NavBar from './navbar';
import Login from './login'; // Import the Login component
import Home from './home';
import AllData from './alldata';
import Withdraw from './withdraw';
import Balance from './balance';
import Deposit from './deposit';
import CreateAccount from './createaccount';

function App() {
	return (
		<HashRouter>
			<>
				<h1>Welcome to Bad Bank</h1>
				<NavBar />

				<Routes>
					<Route path="/" exact element={<Home />} />
					<Route path="/login" element={<Login />} />
					{/* Todo: Add the routes for the remaining elements */}
					{/* '/alldata' must point to the `AllData` component, `/createaccount` must point to the `CreateAccount` component and so on..*/}
				</Routes>
			</>
		</HashRouter>
	);
}

export default App;
