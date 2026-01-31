import { Todo } from '../../todo';
import './styles.less';
import type { TodoType } from '../../../types.ts';
import React from 'react';
import { TodosCreator } from '../../todos-creator';
import { Filters } from '../../filters';

interface IProps {
	todos: TodoType[];
}

const TodosView: React.FC<IProps> = ({ todos }) => {
	return (
		<div className="todos">
			<div className="todos__container">
				<TodosCreator />
				<div className="todos__wrapper">
					{todos.map((item) => {
						return <Todo text={item.text} key={item.id} isCompleted={item.isCompleted} id={item.id} />;
					})}
				</div>
				<Filters />
			</div>
		</div>
	);
};

export { TodosView };
