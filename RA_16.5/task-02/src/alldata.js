import React, { useContext } from 'react';
import { UserContext } from './context';

function AllData() {
	const { user } = useContext(UserContext);

	return (
		<div className="container">
			{user ? (
				<div>
					<h2>All Data</h2>
					<table className="table">
						<thead>
							<tr>
								<th>Email</th>
								<th>Name</th>
								<th>Balance</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>{user.email}</td>
								<td>{user.name}</td>
								<td>${user.balance}</td>
							</tr>
						</tbody>
					</table>
				</div>
			) : (
				<div className="alert alert-warning" role="alert">
					You must be logged in to view all data.
				</div>
			)}
		</div>
	);
}

export default AllData;
