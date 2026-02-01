import { NextFunction, Request, Response } from 'express';
import { filterTodosByStatus, getDataFromFile } from '../helpers/utils';
import { TodoType } from '../helpers/types';
import { writeFileSync } from 'node:fs';
import path from 'path';

export const filtersMiddleware = (req: Request, res: Response, next: NextFunction) => {
	const todos = getDataFromFile<TodoType[]>(__dirname, '../db.json');

	const filter = req.body.filter;

	const result = todos.map((item) => {
		if (item.id === req.params.id) {
			return {
				...item,
				isCompleted: !item.isCompleted,
			};
		}

		return item;
	});

	writeFileSync(path.join(__dirname, '../db.json'), JSON.stringify(result));

	res.locals.todos = filterTodosByStatus(result, filter);
	next();
};
