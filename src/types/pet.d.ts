export type Pet = {
	id: number;
	name: string;
	quantity: number;
	sequence: number;
	obtained: boolean;
};

export interface PetsData {
	username: string;
	page: string;
	itemCount: number;
	obtainedCount: number;
	items: Pet[];
	killCount: unknown[];
}

interface PetWithImage extends Pet {
	image?: string;
}

export type PetTransmogs = Record<string, string[]>;
