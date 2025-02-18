import { PetsData } from '@/types/allpets';

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
		const cachedData = localStorage.getItem(cacheKey);
		if (cachedData) {
			cachedResponse = JSON.parse(cachedData);
		}
	}

	if (cachedResponse && Date.now() - cachedResponse.timestamp < cacheDuration) {
		console.log('Cache hit: Returning cached data');
		return cachedResponse.data as T;
	}

	console.log('Cache miss: Fetching data from API');
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
	return data as T;
}

export const apiClient = {
	get,
};
