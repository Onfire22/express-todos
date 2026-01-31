import { TodosCreatorView } from './todos-creator-view';
import React, { useState } from 'react';
import { USER_TODO } from '../../constants.ts';
import { createTodo } from '../../../../store/thunks/todos.ts';
import { useAppDispatch } from '../../../../store/hooks.ts';

const TodosCreator = () => {
	const [userTodo, setUserTodo] = useState(USER_TODO);
	const dispatch = useAppDispatch();

	const handleChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
		setUserTodo({
			...userTodo,
			isCompleted: e.target.checked,
		});
	};

	const handleChangeUserTodo = (text: string) => {
		setUserTodo({
			...userTodo,
			text,
		});
	};

	const handleCreateTodo = () => {
		if (userTodo.text) {
			dispatch(createTodo(userTodo));
			setUserTodo(USER_TODO);
		}
	};

	return (
		<TodosCreatorView
			input={userTodo.text}
			checkboxValue={userTodo.isCompleted}
			onChangeUserTodo={handleChangeUserTodo}
			onCreateTodo={handleCreateTodo}
			onChangeValue={handleChangeValue}
		/>
	);
};

export { TodosCreator };
