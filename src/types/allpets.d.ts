export interface PetsData {
	username: string;
	page: string;
	itemCount: number;
	obtainedCount: number;
	items: Pet[];
	killCount: unknown[];
}

export type Pet = {
	id: number;
	name: string;
	quantity: number;
	sequence: number;
	obtained: boolean;
};
