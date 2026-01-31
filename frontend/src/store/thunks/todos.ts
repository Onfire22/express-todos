import { createAsyncThunk } from '@reduxjs/toolkit';
import { makeRequest } from '../../api';
import { BASE_URL } from '../../api/constants.ts';
import type { TodoType } from '../../pages/todos-page/types.ts';
import type { RootState } from '../index.ts';

export const fetchTodos = createAsyncThunk<TodoType[], void, { rejectValue: string; state: RootState }>(
	'getAllTodos',
	async (_, { rejectWithValue, getState }) => {
		try {
			const state = getState();
			const { filter } = state.todosReducer;
			return await makeRequest(BASE_URL, 'POST', { filter });
		} catch (e) {
			if (e instanceof Error) {
				return rejectWithValue(e.message);
			}

			return rejectWithValue('Unknown error');
		}
	},
);

export const changeTodoStatus = createAsyncThunk<TodoType[], string, { rejectValue: string }>(
	'changeTodoStatus',
	async (id, { rejectWithValue }) => {
		try {
			return await makeRequest(`${BASE_URL}/${id}`, 'POST');
		} catch (e) {
			if (e instanceof Error) {
				return rejectWithValue(e.message);
			}

			return rejectWithValue('Unknown error');
		}
	},
);

export const deleteTodo = createAsyncThunk<TodoType[], string, { rejectValue: string }>(
	'deleteTodo',
	async (id, { rejectWithValue }) => {
		try {
			return await makeRequest(`${BASE_URL}/delete`, 'DELETE', { id });
		} catch (e) {
			if (e instanceof Error) {
				return rejectWithValue(e.message);
			}

			return rejectWithValue('Unknown error');
		}
	},
);

export const createTodo = createAsyncThunk<TodoType[], TodoType, { rejectValue: string }>(
	'createTodo',
	async (todo, { rejectWithValue }) => {
		try {
			return await makeRequest(`${BASE_URL}/create`, 'POST', { item: todo });
		} catch (e) {
			if (e instanceof Error) {
				return rejectWithValue(e.message);
			}

			return rejectWithValue('Unknown error');
		}
	},
);

export const deleteCompletedTodo = createAsyncThunk<TodoType[], void, { rejectValue: string }>(
	'deleteCompletedTodo',
	async (_, { rejectWithValue }) => {
		try {
			return await makeRequest(`${BASE_URL}/uncompleted`, 'DELETE');
		} catch (e) {
			if (e instanceof Error) {
				return rejectWithValue(e.message);
			}

			return rejectWithValue('Unknown error');
		}
	},
);
