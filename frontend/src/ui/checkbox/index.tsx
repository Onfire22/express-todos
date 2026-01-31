import React from 'react';
import './styles.less';

interface IProps {
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	isChecked: boolean;
	id?: string;
}

const Checkbox: React.FC<IProps> = ({ onChange, isChecked, id }) => {
	return (
		<div className="checkbox">
			<label className="checkbox__label">
				<input
					className="checkbox__input visually-hidden"
					type="checkbox"
					id={id}
					onChange={onChange}
					checked={isChecked}
				/>
			</label>
		</div>
	);
};

export { Checkbox };
