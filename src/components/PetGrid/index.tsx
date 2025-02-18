import { useEffect, useState } from 'react';
import styles from './PetList.module.css';
import { PetsData } from '@/types/allpets';
import useGetAllUserPets from '@/hooks/useGetAllUserPets';
import { useUsername } from '@/hooks/useUsername';
import Loading from '@/components/Loading';
import Error from '@/components/Error';
import Card from '@/components/Card';
import Instructions from '@/components/Instructions';

const PetGrid = () => {
	const { username } = useUsername();
	const [data, setData] = useState<PetsData | null>(null);
	const [debouncedUsername, setDebouncedUsername] = useState(username);
	const [localError, setLocalError] = useState<string | null>(null);

	useEffect(() => {
		setLocalError(null);
		const timer = setTimeout(() => {
			setDebouncedUsername(username);
		}, 1500);

		if (username === '') {
			setDebouncedUsername('');
			setData(null);
		}

		return () => clearTimeout(timer);
	}, [username]);

	const {
		data: petData,
		loading,
		error,
	} = useGetAllUserPets(debouncedUsername, import.meta.env.VITE_PAGENAME);

	useEffect(() => {
		if (error) {
			setLocalError(error);
			setData(null);
		}
	}, [error]);

	useEffect(() => {
		if (petData) {
			setData(petData);
		}
	}, [petData]);

	if (debouncedUsername === '') return <Instructions />;
	if (loading && debouncedUsername !== '') return <Loading />;
	if (localError) return <Error err={localError} />;

	return (
		<>
			<div className={styles.container}>
				<div>
					<h1>{data?.username}'s Pets</h1>
					<p>
						{data?.obtainedCount}/{data?.itemCount}
					</p>
				</div>
				<div className={styles.grid}>
					<Card pets={data?.items} />
				</div>
			</div>
		</>
	);
};

export default PetGrid;
