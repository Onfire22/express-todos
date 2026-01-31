import { BASE_URL } from './constants.ts';

export const makeRequest = async (url: string = BASE_URL, method: string = 'POST', body: object = {}) => {
	const request = await fetch(url, {
		method,
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(body),
	});
	return await request.json();
};
