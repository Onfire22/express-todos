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
import { filtersMiddleware } from '../middlewares/todos';

const todosRouter = Router();

todosRouter.get('/', getAllTodos);
todosRouter.post('/', [validateGetFilteredTodos], getFilteredTodos);
todosRouter.post('/create', [validateCreateTodo], createTodo);
todosRouter.post('/:id', [validateSwitchTodoStatus, filtersMiddleware], switchTodoStatus);
todosRouter.delete('/delete', [validateDeleteTodo], deleteTodo);
todosRouter.delete('/uncompleted', deleteCompleted);

export default todosRouter;
