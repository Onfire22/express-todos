import React from 'react';
import { Checkbox } from '../../../../../ui/checkbox';
import './styles.less';

interface IProps {
	input: string;
	checkboxValue: boolean;
	onChangeValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
	onCreateTodo: () => void;
	onChangeUserTodo: (value: string) => void;
}

const TodosCreatorView: React.FC<IProps> = ({
	checkboxValue,
	onChangeValue,
	input,
	onCreateTodo,
	onChangeUserTodo,
}) => {
	return (
		<div className="todos__creator">
			<div className="todos__creator__input">
				<Checkbox isChecked={checkboxValue} onChange={onChangeValue} />
				<input
					className="todos__creator__field"
					value={input}
					onChange={(e) => onChangeUserTodo(e.target.value)}
					placeholder="Create a new todo..."
				/>
			</div>
			<button className="todos__creator__create" type="button" onClick={onCreateTodo}>
				<img src="/icon-enter.svg" />
			</button>
		</div>
	);
};

export { TodosCreatorView };
