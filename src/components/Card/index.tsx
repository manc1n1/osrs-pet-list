import styles from './Card.module.css';
import { Pet, PetWithImage } from '@/types/pet';
import { baseImageUrl, petTransmogs } from '@/constants/transmogs';

interface CardProps {
	pets: Pet[] | undefined;
}

const Card = ({ pets }: CardProps) => {
	const petsWithImages: PetWithImage[] | undefined = pets?.map((pet) => {
		const transmogs = petTransmogs[pet.name];
		const name = transmogs
			? transmogs[Math.floor(Math.random() * transmogs.length)]
			: pet.name.replace(/\s+/g, '_');

		return {
			...pet,
			image: `${baseImageUrl}${name}.png`,
			name: name.replace(/_/g, ' '),
		};
	});

	return (
		<>
			{petsWithImages?.map(
				(pet) =>
					pet.obtained && (
						<div
							key={pet.id}
							className={styles.card}
						>
							<img
								src={pet.image}
								alt={pet.name}
							/>
							<p>{pet.name}</p>
							<p>Quantity: {pet.quantity}</p>
						</div>
					),
			)}
		</>
	);
};

export default Card;

// TODO: If player has CG KC then Corrupted_youngllef else Youngllef
// TODO: Change color of card based on dry/spoon % of drop rate
