import path from 'path';
import { readFileSync } from 'node:fs';
import { type BufferEncoding, FilterType, TodoType } from './types';

export const getDataFromFile = <T>(baseUrl: string, url: string, code: BufferEncoding = 'utf-8'): T => {
	const pathName = path.join(baseUrl, url);
	const data = readFileSync(pathName, code);
	return JSON.parse(data);
};

export const filterTodosByStatus = (todos: TodoType[], status: FilterType) => {
	switch (status) {
		case 'active':
			return todos.filter((item) => !item.isCompleted);
		case 'completed':
			return todos.filter((item) => item.isCompleted);
		default:
			return todos;
	}
};
