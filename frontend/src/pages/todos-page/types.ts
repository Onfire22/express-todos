export interface TodoType {
	text: string;
	id?: string;
	isCompleted: boolean;
}

export type FilterType = 'all' | 'active' | 'completed';

export interface TodosReducerType {
	todos: TodoType[];
	isTodosLoading: boolean;
	error: string | null;
	filter: FilterType;
	isTodoLoading: boolean;
}
