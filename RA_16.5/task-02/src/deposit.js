import React, { useContext, useState } from 'react';
import { UserContext } from './context';

function Deposit() {
	const { user, updateUserBalance } = useContext(UserContext);
	const [depositAmount, setDepositAmount] = useState(0);
	const [showUpdatedBalance, setShowUpdatedBalance] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!depositAmount || depositAmount <= 0) {
			alert('Please enter a valid amount to deposit');
			return;
		}
		const updatedBalance = user.balance + parseFloat(depositAmount);
		// Todo: Call the `updateUserBalance` function with the `updatedBalance` as its parameter
		// Set state `showUpdatedBalance` to true
		// Set state `depositAmount` to empty string
	};

	const handleNextDeposit = () => {
		setShowUpdatedBalance(false);
	};

	if (!user) {
		return (
			<div className="container">
				<div className="alert alert-warning" role="alert">
					You must be logged in to make a deposit.
				</div>
			</div>
		);
	}

	return (
		<div className="container">
			<h2>Deposit</h2>
			{showUpdatedBalance && (
				<p className="text-success">You have deposited successfully!</p>
			)}
			<p className="lead">Current Balance: ${user.balance}</p>
			{showUpdatedBalance && (
				<button onClick={handleNextDeposit} className="btn btn-primary">
					Deposit Again
				</button>
			)}
			{!showUpdatedBalance && (
				<form onSubmit={handleSubmit}>
					<div className="mb-3">
						<label htmlFor="depositAmount" className="form-label">
							Amount:
						</label>
						<input
							type="number"
							className="form-control"
							id="depositAmount"
							value={depositAmount}
							onChange={(e) => setDepositAmount(e.target.value)}
							min="0.01"
							step="0.01"
							required
						/>
					</div>
					<button type="submit" className="btn btn-primary">
						Deposit
					</button>
				</form>
			)}
		</div>
	);
}

export default Deposit;
