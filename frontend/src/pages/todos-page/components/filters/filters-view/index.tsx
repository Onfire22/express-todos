import { FILTERS } from '../../../constants.ts';
import React from 'react';
import type { FilterType, TodoType } from '../../../types';
import './styles.less';

interface IProps {
	uncompletedTodos: TodoType[];
	activeFilter: FilterType;
	onFilterSet: (filterId: FilterType) => void;
	onClearCompleted: () => void;
}

const FiltersView: React.FC<IProps> = ({ uncompletedTodos, activeFilter, onFilterSet, onClearCompleted }) => {
	return (
		<div className="filters">
			<span>{`${uncompletedTodos.length} items left`}</span>
			<div className="filters__filters">
				{FILTERS.map((filter) => {
					return (
						<button
							type="button"
							className={`filters__filter${activeFilter === filter.id ? ' filters__filter_active' : ''}`}
							key={filter.id}
							onClick={() => onFilterSet(filter.id)}
						>
							{filter.title}
						</button>
					);
				})}
			</div>
			<button className="filters__reset" type="button" onClick={onClearCompleted}>
				Clear completed
			</button>
		</div>
	);
};

export { FiltersView };
