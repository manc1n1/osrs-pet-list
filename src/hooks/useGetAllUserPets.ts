import { useEffect, useState } from 'react';
import { apiClient } from '@/services/apiClient';
import { PetsData } from '@/types/pet';

const useGetAllUserPets = (username: string, pageName: string) => {
	const [data, setData] = useState<PetsData | null>(null);
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		if (!username) {
			setLoading(false);
			return;
		}

		const fetchData = async () => {
			setLoading(true);
			setError(null);

			try {
				const response = await apiClient.get<PetsData>(
					`/items/user/${username.toLowerCase()}`,
					{
						pageName,
					},
				);
				setData(response);
			} catch (err) {
				console.error('API Fetch Error:', err);
				setError(err instanceof Error ? err.message : 'Failed to fetch data');
			} finally {
				setLoading(false);
			}
		};

		fetchData();
	}, [username, pageName]);

	return { data, loading, error };
};

export default useGetAllUserPets;
