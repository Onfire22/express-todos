import path from 'path';
import { readFileSync } from 'node:fs';
import { type BufferEncoding } from './types';

export const getDataFromFile = <T>(baseUrl: string, url: string, code: BufferEncoding = 'utf-8'): T => {
	const pathName = path.join(baseUrl, url);
	const data = readFileSync(pathName, code);
	return JSON.parse(data);
};
