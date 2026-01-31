import { Response, Request } from 'express';
import { getDataFromFile } from '../helpers/utils';
import { FilterType, TodoType } from '../helpers/types';
import { writeFileSync } from 'node:fs';
import path from 'path';
import { NotFoundError } from '../errors/not-found';
import { NotCreatedError } from '../errors/not-created';
import { v4 as uuidv4 } from 'uuid';

export const getAllTodos = (req: Request, res: Response) => {
	const data = getDataFromFile<TodoType[]>(__dirname, '../db.json');
	if (!data) {
		throw new NotFoundError('Todos not found!');
	}

	res.status(200).json(data);
};

export const getFilteredTodos = (req: Request<{}, { filter: FilterType }>, res: Response) => {
	const todos = getDataFromFile<TodoType[]>(__dirname, '../db.json');

	const filter = req.body.filter;

	if (filter === 'all') {
		res.status(200).json(todos);
	} else {
		const filteredTodos = todos.filter((todo) => {
			if (filter === 'active') {
				return !todo.isCompleted;
			}
			if (filter === 'completed') {
				return todo.isCompleted;
			}
		});

		res.status(200).json(filteredTodos);
	}
};

export const switchTodoStatus = (req: Request<{ id: string }>, res: Response) => {
	const { params } = req;

	const data = getDataFromFile<TodoType[]>(__dirname, '../db.json');

	if (!data) {
		throw new NotFoundError('Todos not found!');
	}

	const todos = data.map((item) => {
		if (item.id === params.id) {
			return {
				...item,
				isCompleted: !item.isCompleted,
			};
		}

		return item;
	});

	writeFileSync(path.join(__dirname, '../db.json'), JSON.stringify(todos));

	res.status(200).json(todos);
};

export const deleteTodo = (req: Request<{}, { id: string }>, res: Response) => {
	const { id } = req.body;

	const data = getDataFromFile<TodoType[]>(__dirname, '../db.json');

	if (!data) {
		throw new NotFoundError('Todos not found!');
	}

	const todos = data.filter((item) => item.id !== id);

	writeFileSync(path.join(__dirname, '../db.json'), JSON.stringify(todos));

	res.status(200).json(todos);
};

export const createTodo = (req: Request<{}, { item: TodoType }>, res: Response) => {
	const { item } = req.body;

	const todos = getDataFromFile<TodoType[]>(__dirname, '../db.json');

	const newTodo = {
		...item,
		id: uuidv4(),
	};

	const todosWithUserTodo = [...todos, newTodo];

	if (todosWithUserTodo.length === todos.length) {
		throw new NotCreatedError('Todo does not created!');
	}

	writeFileSync(path.join(__dirname, '../db.json'), JSON.stringify(todosWithUserTodo));

	res.status(200).json(todosWithUserTodo);
};

export const deleteCompleted = (req: Request, res: Response) => {
	const todos = getDataFromFile<TodoType[]>(__dirname, '../db.json');

	const filteredTodos = todos.filter((item) => !item.isCompleted);

	writeFileSync(path.join(__dirname, '../db.json'), JSON.stringify(filteredTodos));

	res.status(200).json(filteredTodos);
};
