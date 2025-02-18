import styles from './Card.module.css';
import { Pet } from '@/types/allpets';

interface CardProps {
	pets: Pet[] | undefined;
}

interface PetWithImage extends Pet {
	image?: string;
}

const Card = ({ pets }: CardProps) => {
	const petsWithImages: PetWithImage[] | undefined = pets?.map((pet) => ({
		...pet,
		image:
			pet.name === 'Muphin'
				? `https://oldschool.runescape.wiki/images/Muphin_(${
						['ranged', 'melee', 'shielded'][Math.floor(Math.random() * 3)]
				  }).png`
				: `https://oldschool.runescape.wiki/images/${pet.name.replace(
						/\s+/g,
						'_',
				  )}.png`,
	}));

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
