import { PetsData } from '@/types/pet';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const cache = new Map<string, { data: PetsData; timestamp: number }>();

async function get<T>(
	endpoint: string,
	params?: Record<string, string>,
	cacheDuration = 900000,
): Promise<T> {
	const url = new URL(`${API_BASE_URL}${endpoint}`);

	if (params) {
		Object.keys(params).forEach((key) =>
			url.searchParams.append(key, params[key]),
		);
	}

	const cacheKey = `${url.toString()}`;

	let cachedResponse = cache.get(cacheKey);

	if (!cachedResponse) {
		console.log('Cache miss: Fetching from local storage');
		const cachedData = localStorage.getItem(cacheKey);
		if (cachedData) {
			console.log('Local storage hit: Attempting to cache data...');
			cachedResponse = JSON.parse(cachedData);
		}
	}

	if (cachedResponse && Date.now() - cachedResponse.timestamp < cacheDuration) {
		console.log('Cache hit: Returning cached data');
		console.log(
			'Local storage age:',
			`${(
				cachedResponse && Date.now() / 60000 - cachedResponse.timestamp / 60000
			).toFixed(2)}mins`,
		);
		console.log('<');
		console.log('Cache duration age:', `${cacheDuration / 60000}mins`);
		console.log('');
		return cachedResponse.data as T;
	} else {
		console.log('Local storage data stale...');
		console.log(
			'Local storage age:',
			`${(
				cachedResponse && Date.now() / 60000 - cachedResponse.timestamp / 60000
			)?.toFixed(2)}mins`,
		);
		console.log('>');
		console.log('Cache duration age:', `${cacheDuration / 60000}mins`);
		console.log('Local storage miss: Fetching data from API');
	}

	const response = await fetch(url.toString());
	if (!response.ok) {
		throw new Error(`HTTP error! status: ${response.status}`);
	}
	const data = await response.json();

	cache.set(cacheKey, { data, timestamp: Date.now() });
	localStorage.setItem(
		cacheKey,
		JSON.stringify({ data, timestamp: Date.now() }),
	);

	console.log('Data fetched from API and cached');
	console.log('---[END GET]---');
	console.log('');
	return data as T;
}

export const apiClient = {
	get,
};
