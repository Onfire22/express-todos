import type { FilterType } from './types.ts';

export const FILTERS: Array<{ id: FilterType; title: string }> = [
	{
		id: 'all',
		title: 'All',
	},
	{
		id: 'active',
		title: 'Active',
	},
	{
		id: 'completed',
		title: 'Completed',
	},
];

export const USER_TODO = {
	text: '',
	isCompleted: false,
};
