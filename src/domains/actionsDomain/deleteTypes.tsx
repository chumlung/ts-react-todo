import { AxiosPromise } from 'axios';

import { Action, ActionWithPayload, ActionWithError } from '../base';
import { DeleteResponse } from '../responseTypes/deleteResponse';

export const DELETE_TODO_PENDING = 'DELETE_TODO_PENDING';
export type DELETE_TODO_PENDING = typeof DELETE_TODO_PENDING;

export const DELETE_TODO_FULFILLED = 'DELETE_TODO_FULFILLED';
export type DELETE_TODO_FULFILLED = typeof DELETE_TODO_FULFILLED;

export const DELETE_TODO_REJECTED = 'DELETE_TODO_REJECTED';
export type DELETE_TODO_REJECTED = typeof DELETE_TODO_REJECTED;

export const DELETE_TODO = 'DELETE_TODO';
export type DELETE_TODO = typeof DELETE_TODO;

export type DeleteTodo = ActionWithPayload<DELETE_TODO, AxiosPromise<{}>>;
export type DeleteTodoPending = Action<DELETE_TODO_PENDING>;
export type DeleteTodoFulfilled = ActionWithPayload<DELETE_TODO_FULFILLED, DeleteResponse>;
export type DeleteTodoRejected = ActionWithError<DELETE_TODO_REJECTED, {}>;

export type DeleteTypes = DeleteTodoPending| DeleteTodoFulfilled| DeleteTodoRejected;