import { AxiosPromise } from 'axios';

import { Action, ActionWithPayload, ActionWithError } from '../base';
import { EditResponse } from '../responseTypes/editResponse';

export const EDIT_TODO_PENDING = 'EDIT_TODO_PENDING';
export type EDIT_TODO_PENDING = typeof EDIT_TODO_PENDING;

export const EDIT_TODO_FULFILLED = 'EDIT_TODO_FULFILLED';
export type EDIT_TODO_FULFILLED = typeof EDIT_TODO_FULFILLED;

export const EDIT_TODO_REJECTED = 'EDIT_TODO_REJECTED';
export type EDIT_TODO_REJECTED = typeof EDIT_TODO_REJECTED;

export const EDIT_TODO = 'EDIT_TODO';
export type EDIT_TODO = typeof EDIT_TODO;

export type EditTodo = ActionWithPayload<EDIT_TODO, AxiosPromise<{}>>;
export type EditTodoPending = Action<EDIT_TODO_PENDING>;
export type EditTodoFulfilled = ActionWithPayload<EDIT_TODO_FULFILLED, EditResponse>;
export type EditTodoRejected = ActionWithError<EDIT_TODO_REJECTED, {}>;

export type EditTypes = EditTodoPending| EditTodoFulfilled| EditTodoRejected;