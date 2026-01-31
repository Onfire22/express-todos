import { Checkbox } from '../../../../../ui/checkbox';
import React from 'react';
import './styles.less';

interface IProps {
	text: string;
	isCompleted: boolean;
	id?: string;
	onChangeTodoStatus: (e: React.ChangeEvent<HTMLInputElement>) => void;
	onDeleteTodo: (id?: string) => void;
}

const TodoView: React.FC<IProps> = ({ text, isCompleted, id, onChangeTodoStatus, onDeleteTodo }) => {
	return (
		<div className="todo">
			<div className={`todo__info${isCompleted ? ' todo__info_completed' : ''}`}>
				<Checkbox isChecked={isCompleted} onChange={onChangeTodoStatus} id={id} />
				<span>{text}</span>
			</div>
			<button type="button" className="todo__button" onClick={() => onDeleteTodo(id)}>
				<img src="/icon-cross.svg" />
			</button>
		</div>
	);
};

export { TodoView };
