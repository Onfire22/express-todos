import { TodoView } from './todo-view';
import { changeTodoStatus, deleteTodo } from '../../../../store/thunks/todos.ts';
import { useAppDispatch } from '../../../../store/hooks.ts';
import React from 'react';

interface IProps {
	text: string;
	isCompleted: boolean;
	id?: string;
}

const Todo: React.FC<IProps> = ({ text, isCompleted, id }) => {
	const dispatch = useAppDispatch();

	const handleChangeTodoStatus = (e: React.ChangeEvent<HTMLInputElement>) => {
		dispatch(changeTodoStatus(e.target.id));
	};

	const handleDeleteTodo = (id?: string) => {
		dispatch(deleteTodo(String(id)));
	};

	return (
		<TodoView
			id={id}
			text={text}
			isCompleted={isCompleted}
			onDeleteTodo={handleDeleteTodo}
			onChangeTodoStatus={handleChangeTodoStatus}
		/>
	);
};

export { Todo };
