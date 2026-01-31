import { FiltersView } from './filters-view';
import type { FilterType } from '../../types.ts';
import { setFilterAction } from '../../../../store/slices/todos-slice.ts';
import { deleteCompletedTodo, fetchTodos } from '../../../../store/thunks/todos.ts';
import { useAppDispatch, useAppSelector } from '../../../../store/hooks.ts';
import { getAllTodosSelector, getFilterSelector } from '../../selectors.ts';
import { useMemo } from 'react';

const Filters = () => {
	const dispatch = useAppDispatch();

	const todos = useAppSelector(getAllTodosSelector());

	const filter = useAppSelector(getFilterSelector());

	const handleFilterSet = (filterId: FilterType) => {
		dispatch(setFilterAction(filterId));
		dispatch(fetchTodos());
	};

	const handleClearCompleted = () => {
		dispatch(deleteCompletedTodo());
	};

	const uncompletedTodos = useMemo(() => todos.filter((todo) => !todo.isCompleted), [todos]);

	return (
		<FiltersView
			activeFilter={filter}
			onFilterSet={handleFilterSet}
			uncompletedTodos={uncompletedTodos}
			onClearCompleted={handleClearCompleted}
		/>
	);
};

export { Filters };
