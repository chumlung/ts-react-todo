import { Action } from '../base';

export const RESET_SINGLE_TODO = 'RESET_SINGLE_TODO';
export type RESET_SINGLE_TODO = typeof RESET_SINGLE_TODO;

export type resetSingleTodo = Action<RESET_SINGLE_TODO>;
