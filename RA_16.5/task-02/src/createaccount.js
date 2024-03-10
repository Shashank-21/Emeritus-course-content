import React, { useContext, useState } from 'react';
import { UserContext } from './context';

function CreateAccount() {
	const { addAccount } = useContext(UserContext);
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [showSuccess, setShowSuccess] = useState(false);
	const [showForm, setShowForm] = useState(true);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		addAccount({ name, email, password });
		setName('');
		setEmail('');
		setPassword('');
		setShowSuccess(true);
		setShowForm(false);
	};

	const handleCreateAnother = () => {
		setShowForm(true);
		setShowSuccess(false);
	};

	return (
		<div className="container">
			{showForm && (
				<form onSubmit={handleSubmit}>
					<div className="mb-3">
						<label htmlFor="name" className="form-label">
							Name
						</label>
						<input
							type="text"
							className="form-control"
							id="name"
							value={name}
							onChange={(e) => setName(e.target.value)}
							required
						/>
					</div>
					<div className="mb-3">
						<label htmlFor="email" className="form-label">
							Email address
						</label>
						<input
							type="email"
							className="form-control"
							id="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							required
						/>
					</div>
					<div className="mb-3">
						<label htmlFor="password" className="form-label">
							Password
						</label>
						<input
							type="password"
							className="form-control"
							id="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							required
						/>
					</div>
					<button type="submit" className="btn btn-primary">
						Create Account
					</button>
				</form>
			)}
			{showSuccess && (
				<>
					<p>Account successfully created!</p>
					<button className="btn btn-primary" onClick={handleCreateAnother}>
						Create Another Account
					</button>
				</>
			)}
		</div>
	);
}

export default CreateAccount;
