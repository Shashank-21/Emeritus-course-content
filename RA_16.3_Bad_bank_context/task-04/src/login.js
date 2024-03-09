import React, { useContext } from 'react';
import { UserContext } from './context';

function Login() {
	const ctx = useContext(UserContext);
	return (
		<h1>
			Login
			<br />
			{JSON.stringify(ctx)}
		</h1>
	);
}

export default Login;
