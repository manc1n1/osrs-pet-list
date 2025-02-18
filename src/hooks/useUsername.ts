// context/useUsername.tsx
import { useContext } from 'react';
import UsernameContext from '@/contexts/usernameContext';

export const useUsername = () => {
	const context = useContext(UsernameContext);

	if (!context) {
		throw new Error('useUsername must be used within a UsernameProvider');
	}

	return context;
};
