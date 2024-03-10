import React, { useContext, useState } from 'react';
import { UserContext } from './context';

function Withdraw() {
	const { user, updateUserBalance } = useContext(UserContext);
	const [withdrawAmount, setWithdrawAmount] = useState('');
	const [error, setError] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		const numWithdrawAmount = parseFloat(withdrawAmount);

		if (!numWithdrawAmount || numWithdrawAmount <= 0) {
			setError('Please enter a valid amount to withdraw.');
			return;
		}

		if (numWithdrawAmount > user.balance) {
			setError('Insufficient funds to complete this withdrawal.');
			return;
		}

		const updatedBalance = user.balance - numWithdrawAmount;
		updateUserBalance(updatedBalance);
		setWithdrawAmount('');
		setError('');
	};

	if (!user) {
		return (
			<div className="container">
				<div className="alert alert-warning" role="alert">
					You must be logged in to make a withdrawal.
				</div>
			</div>
		);
	}

	return (
		<div className="container">
			<h2>Withdraw</h2>
			<p className="lead">Current Balance: ${user.balance}</p>
			<form onSubmit={handleSubmit}>
				<div className="mb-3">
					<label htmlFor="withdrawAmount" className="form-label">
						Amount:
					</label>
					<input
						type="number"
						className="form-control"
						id="withdrawAmount"
						value={withdrawAmount}
						onChange={(e) => setWithdrawAmount(e.target.value)}
						min="0.01"
						step="0.01"
						required
					/>
				</div>
				{error && (
					<div className="alert alert-danger" role="alert">
						{error}
					</div>
				)}
				<button type="submit" className="btn btn-primary">
					Withdraw
				</button>
			</form>
		</div>
	);
}

export default Withdraw;
