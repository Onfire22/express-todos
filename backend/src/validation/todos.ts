import { celebrate, Joi, Segments } from 'celebrate';

export const validateGetFilteredTodos = celebrate({
	[Segments.BODY]: {
		filter: Joi.string().valid('all', 'active', 'completed').required(),
	},
});

export const validateSwitchTodoStatus = celebrate({
	[Segments.PARAMS]: {
		id: Joi.string().required().min(1),
	},
});

export const validateDeleteTodo = celebrate({
	[Segments.BODY]: {
		id: Joi.string().required().min(1),
	},
});

export const validateCreateTodo = celebrate({
	[Segments.BODY]: {
		item: Joi.object({
			text: Joi.string().required().min(1),
			isCompleted: Joi.boolean().required(),
		}),
	},
});
