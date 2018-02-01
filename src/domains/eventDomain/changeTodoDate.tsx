import { ActionWithPayload } from '../base';

export const CHANGE_TODO_DATE = 'CHANGE_TODO_DATE';
export type CHANGE_TODO_DATE = typeof CHANGE_TODO_DATE;

export type changeTodoDate = ActionWithPayload<CHANGE_TODO_DATE, Date>;
