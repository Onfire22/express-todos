import { Router } from 'express';
import {
	createTodo,
	deleteCompleted,
	deleteTodo,
	getAllTodos,
	getFilteredTodos,
	switchTodoStatus,
} from '../controllers/todos';
import {
	validateCreateTodo,
	validateDeleteTodo,
	validateGetFilteredTodos,
	validateSwitchTodoStatus,
} from '../validation/todos';

const todosRouter = Router();

todosRouter.get('/', getAllTodos);
todosRouter.post('/', [validateGetFilteredTodos], getFilteredTodos);
todosRouter.post('/create', [validateCreateTodo], createTodo);
todosRouter.post('/:id', [validateSwitchTodoStatus], switchTodoStatus);
todosRouter.delete('/delete', [validateDeleteTodo], deleteTodo);
todosRouter.delete('/uncompleted', deleteCompleted);

export default todosRouter;
