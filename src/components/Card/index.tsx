import styles from './Card.module.css';
import { Pet } from '@/types/allpets';

interface CardProps {
	pets: Pet[] | undefined;
}

interface PetWithImage extends Pet {
	image?: string;
}

const Card = ({ pets }: CardProps) => {
	// TODO: If player has CG KC then Corrupted_youngllef else Youngllef
	const petsWithImages: PetWithImage[] | undefined = pets?.map((pet) => {
		let imageUrl: string;

		switch (pet.name) {
			case 'Ikkle hydra':
				imageUrl = `https://oldschool.runescape.wiki/images/Ikkle_hydra_(${
					['serpentine', 'electric', 'fire', 'extinguished'][
						Math.floor(Math.random() * 4)
					]
				}).png`;
				break;
			case 'Pet dark core':
				imageUrl = `https://oldschool.runescape.wiki/images/${
					['Pet_dark_core', 'Pet_corporeal_critter'][
						Math.floor(Math.random() * 2)
					]
				}.png`;
				break;
			case 'Baby mole':
				imageUrl = `https://oldschool.runescape.wiki/images/${
					['Baby_mole', 'Baby_mole-rat'][Math.floor(Math.random() * 2)]
				}.png`;
				break;
			case 'Phoenix':
				imageUrl = `https://oldschool.runescape.wiki/images/Phoenix${
					['', '_(blue)', '_(green)', '_(purple)', '_(white)'][
						Math.floor(Math.random() * 5)
					]
				}.png`;
				break;
			case 'Pet snakeling':
				imageUrl = `https://oldschool.runescape.wiki/images/Pet_snakeling${
					['', '_(magma)', '_(tanzanite)'][Math.floor(Math.random() * 3)]
				}.png`;
				break;
			case 'Rock golem':
				imageUrl = `https://oldschool.runescape.wiki/images/Rock_golem${
					[
						'',
						'_(tin)',
						'_(copper)',
						'_(iron)',
						'_(blurite)',
						'_(silver)',
						'_(coal)',
						'_(gold)',
						'_(mithril)',
						'_(granite)',
						'_(adamantite)',
						'_(runite)',
						'_(amethyst)',
						'_(lovakite)',
						'_(elemental)',
						'_(daeyalt)',
					][Math.floor(Math.random() * 16)]
				}.png`;
				break;
			case 'Tangleroot':
				imageUrl = `https://oldschool.runescape.wiki/images/Tangleroot${
					[
						'',
						'_(crystal)',
						'_(dragonfruit)',
						'_(herb)',
						'_(redwood)',
						'_(white_lily)',
					][Math.floor(Math.random() * 6)]
				}.png`;
				break;
			case 'Rocky':
				imageUrl = `https://oldschool.runescape.wiki/images/${
					['Rocky', 'Ziggy', 'Red'][Math.floor(Math.random() * 3)]
				}.png`;
				break;
			case 'Baby chinchompa':
				imageUrl = `https://oldschool.runescape.wiki/images/Baby_chinchompa_(${
					['grey', 'red', 'black', 'gold'][Math.floor(Math.random() * 4)]
				}).png`;
				break;
			case 'Rift guardian':
				imageUrl = `https://oldschool.runescape.wiki/images/Rift_guardian_(${
					[
						'fire',
						'air',
						'mind',
						'water',
						'earth',
						'body',
						'cosmic',
						'chaos',
						'nature',
						'law',
						'death',
						'soul',
						'astral',
						'blood',
						'wrath',
					][Math.floor(Math.random() * 15)]
				}).png`;
				break;
			case 'Muphin':
				imageUrl = `https://oldschool.runescape.wiki/images/Muphin_(${
					['ranged', 'melee', 'shielded'][Math.floor(Math.random() * 3)]
				}).png`;
				break;
			case 'Bran':
				imageUrl = `https://oldschool.runescape.wiki/images/${
					['Bran', 'Ric'][Math.floor(Math.random() * 2)]
				}.png`;
				break;
			default:
				imageUrl = `https://oldschool.runescape.wiki/images/${pet.name.replace(
					/\s+/g,
					'_',
				)}.png`;
		}

		return {
			...pet,
			image: imageUrl,
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
