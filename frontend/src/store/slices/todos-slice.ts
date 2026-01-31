import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { FilterType, TodosReducerType, TodoType } from '../../pages/todos-page/types.ts';
import { changeTodoStatus, createTodo, deleteCompletedTodo, deleteTodo, fetchTodos } from '../thunks/todos.ts';

const initialState: TodosReducerType = {
	todos: [],
	isTodosLoading: false,
	error: null,
	filter: 'all',
	isTodoLoading: false,
};

const todosSLice = createSlice({
	name: '@todos',
	initialState,
	reducers: {
		setFilterAction: (state, action: PayloadAction<FilterType>) => {
			state.filter = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(fetchTodos.pending, (state) => {
			state.isTodosLoading = true;
		});
		builder.addCase(fetchTodos.fulfilled, (state, action: PayloadAction<TodoType[]>) => {
			state.todos = action.payload;
			state.isTodosLoading = false;
		});
		builder.addCase(fetchTodos.rejected, (state, action) => {
			state.isTodosLoading = false;
			state.error = action.payload ?? null;
		});

		builder.addCase(changeTodoStatus.pending, (state) => {
			state.isTodoLoading = true;
		});
		builder.addCase(changeTodoStatus.fulfilled, (state, action: PayloadAction<TodoType[]>) => {
			state.todos = action.payload;
			state.isTodoLoading = false;
		});
		builder.addCase(changeTodoStatus.rejected, (state, action) => {
			state.isTodoLoading = false;
			state.error = action.payload ?? null;
		});

		builder.addCase(deleteTodo.pending, (state) => {
			state.isTodoLoading = true;
		});
		builder.addCase(deleteTodo.fulfilled, (state, action: PayloadAction<TodoType[]>) => {
			state.todos = action.payload;
			state.isTodoLoading = false;
		});
		builder.addCase(deleteTodo.rejected, (state, action) => {
			state.isTodoLoading = false;
			state.error = action.payload ?? null;
		});

		builder.addCase(createTodo.pending, (state) => {
			state.isTodoLoading = true;
		});
		builder.addCase(createTodo.fulfilled, (state, action: PayloadAction<TodoType[]>) => {
			state.todos = action.payload;
			state.isTodosLoading = false;
		});
		builder.addCase(createTodo.rejected, (state, action) => {
			state.isTodosLoading = false;
			state.error = action.payload ?? null;
		});

		builder.addCase(deleteCompletedTodo.pending, (state) => {
			state.isTodoLoading = true;
		});
		builder.addCase(deleteCompletedTodo.fulfilled, (state, action: PayloadAction<TodoType[]>) => {
			state.todos = action.payload;
			state.isTodosLoading = false;
		});
		builder.addCase(deleteCompletedTodo.rejected, (state, action) => {
			state.isTodosLoading = false;
			state.error = action.payload ?? null;
		});
	},
});

export const { setFilterAction } = todosSLice.actions;

export default todosSLice.reducer;
