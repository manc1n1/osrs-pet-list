import React, { createContext, useState, ReactNode } from 'react';

interface UsernameContextProps {
	username: string;
	setUsername: React.Dispatch<React.SetStateAction<string>>;
}

const UsernameContext = createContext<UsernameContextProps | undefined>(
	undefined,
);

interface UsernameProviderProps {
	children: ReactNode;
}

export const UsernameProvider = ({ children }: UsernameProviderProps) => {
	const [username, setUsername] = useState('');

	return (
		<UsernameContext.Provider value={{ username, setUsername }}>
			{children}
		</UsernameContext.Provider>
	);
};

export default UsernameContext;
