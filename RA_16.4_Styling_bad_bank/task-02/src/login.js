import React, { useContext } from 'react';
import { UserContext } from './context';

function Login() {
	const ctx = useContext(UserContext);
	return <h1>Login</h1>;
}

export default Login;
