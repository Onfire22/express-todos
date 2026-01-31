import { combineReducers } from '@reduxjs/toolkit';
import todosReducer from '../slices/todos-slice.ts';

export default combineReducers({ todosReducer });
