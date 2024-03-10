import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import NavBar from './navbar';
import Login from './login';
import Home from './home';
import AllData from './alldata';
import Withdraw from './withdraw';
import Balance from './balance';
import Deposit from './deposit';
import CreateAccount from './createaccount';
import { UserProvider } from './context';

function App() {
	return (
		<HashRouter>
			<>
				<h1>Welcome to Bad Bank</h1>
				<NavBar />
				<UserProvider>
					<Routes>
						<Route path="/" exact element={<Home />} />
						<Route path="/login" element={<Login />} />
						<Route path="/alldata" element={<AllData />} />
						<Route path="/withdraw" element={<Withdraw />} />
						<Route path="/balance" element={<Balance />} />
						<Route path="/deposit" element={<Deposit />} />
						<Route pa th="/createaccount" element={<CreateAccount />} />
					</Routes>
				</UserProvider>
			</>
		</HashRouter>
	);
}

export default App;
