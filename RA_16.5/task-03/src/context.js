import React, { createContext, useState } from 'react';
export const UserContext = createContext();

export const UserProvider = ({ children }) => {
	const [users, setUsers] = useState([
		{
			name: 'abel',
			email: 'abel@mit.edu',
			password: 'secret',
			balance: 100,
		},
	]);

	const [user, setUser] = useState(null);

	const login = (userData) => {
		setUser(userData);
	};

	const logout = () => {
		setUser(null);
	};

	const addAccount = (newAccount) => {
		setUsers([...users, { ...newAccount, balance: 100 }]);
	};

	const updateUserBalance = (newBalance) => {
		if (!user) return;

		setUser({ ...user, balance: newBalance });

		setUsers(
			users.map((u) =>
				u.email === user.email ? { ...u, balance: newBalance } : u
			)
		);
	};

	return (
		<UserContext.Provider
			value={{
				user,
				users,
				addAccount,
				login,
				logout,
				updateUserBalance,
			}}
		>
			{children}
		</UserContext.Provider>
	);
};
