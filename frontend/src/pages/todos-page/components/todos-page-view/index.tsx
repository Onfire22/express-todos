import * as React from 'react';
import type { ReactNode } from 'react';
import './styles.less';

interface IProps {
	children: ReactNode;
}

const TodosPageView: React.FC<IProps> = ({ children }) => {
	return (
		<div className="todos-page-view">
			<header className="todos-page-view__header">
				<div className="todos-page-view__text">todo</div>
			</header>
			{children}
			<footer className="todos-page-view__footer">
				<span className="todos-page-view__info">Drag and Drop to reorder list</span>
			</footer>
		</div>
	);
};

export { TodosPageView };
