import React, { useState, useContext } from 'react';
import { UserContext } from './context';

function Login() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');
	const { users, user, login, logout } = useContext(UserContext);

	const handleSubmit = (e) => {
		e.preventDefault();
		setError('');
		const account = users.find((existingUser) => existingUser.email === email);
		if (account && password === account.password) {
			// Todo: Call the `login` function with `account` as the parameter
			// Set email and password to empty strings
		} else {
			// set the error state to 'Invalid username or password'
		}
	};

	const handleLogout = () => {
		logout();
	};

	if (user) {
		return (
			<div className="container">
				<h2>Welcome, {user.name}!</h2>
				<button className="btn btn-warning" onClick={handleLogout}>
					Logout
				</button>
			</div>
		);
	}

	return (
		<div className="container">
			<h2>Login</h2>
			<form onSubmit={handleSubmit} className="mb-3">
				<div className="mb-3">
					<label htmlFor="email" className="form-label">
						Email:
					</label>
					<input
						type="email"
						className="form-control"
						id="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</div>
				<div className="mb-3">
					<label htmlFor="password" className="form-label">
						Password:
					</label>
					<input
						type="password"
						className="form-control"
						id="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
				</div>
				{error && (
					<div className="alert alert-danger" role="alert">
						{error}
					</div>
				)}
				<button type="submit" className="btn btn-primary">
					Login
				</button>
			</form>
		</div>
	);
}

export default Login;
