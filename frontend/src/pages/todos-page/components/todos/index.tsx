import { TodosView } from './todos-view';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../store/hooks.ts';
import { fetchTodos } from '../../../../store/thunks/todos.ts';
import { getAllTodosSelector } from '../../selectors.ts';

const Todos = () => {
	const dispatch = useAppDispatch();

	const todos = useAppSelector(getAllTodosSelector());

	useEffect(() => {
		dispatch(fetchTodos());
	}, [dispatch]);

	return <TodosView todos={todos} />;
};

export { Todos };
