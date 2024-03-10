import React from 'react';

function NavBar() {
	return (
		<>
			<nav>
				{' '}
				{/**Todo: Add the classNames for the nav element here */}
				<a className="navbar-brand" href="#">
					BadBank
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div id="navbarNav">
					{/* Todo: Add the classnames for the wrapping div  */}
					<ul>
						{/* Todo: Add the classnames for the wrapping ul element  */}
						<li className="nav-item">
							<a className="nav-link" href="#/createaccount/">
								Create Account
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#/login/">
								Login
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#/deposit/">
								Deposit
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#/withdraw/">
								Withdraw
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#/balance/">
								Balance
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#/alldata/">
								AllData
							</a>
						</li>
					</ul>
				</div>
			</nav>
		</>
	);
}

export default NavBar;
