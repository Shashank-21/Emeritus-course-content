import React, { createContext } from 'react';
export const UserContext = createContext();

export const UserProvider = ({ children }) => {
	return (
		<UserContext.Provider
			value={{
				users: [
					{
						name: 'abel',
						email: 'abel@mit.edu',
						password: 'secret',
						balance: 100,
					},
				],
			}}
		>
			{children}
		</UserContext.Provider>
	);
};
