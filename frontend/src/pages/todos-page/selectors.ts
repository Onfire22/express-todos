import type { RootState } from '../../store';

export const getAllTodosSelector = () => (state: RootState) => state.todosReducer.todos;

export const getFilterSelector = () => (state: RootState) => state.todosReducer.filter;
