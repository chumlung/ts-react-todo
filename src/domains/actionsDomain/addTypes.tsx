import { AxiosPromise } from 'axios';

import { Action, ActionWithPayload, ActionWithError } from '../base';
import { AddResponse } from '../responseTypes/addResponse';

export const ADD_TODO_PENDING = 'ADD_TODO_PENDING';
export type ADD_TODO_PENDING = typeof ADD_TODO_PENDING;

export const ADD_TODO_FULFILLED = 'ADD_TODO_FULFILLED';
export type ADD_TODO_FULFILLED = typeof ADD_TODO_FULFILLED;

export const ADD_TODO_REJECTED = 'ADD_TODO_REJECTED';
export type ADD_TODO_REJECTED = typeof ADD_TODO_REJECTED;

export const ADD_TODO = 'ADD_TODO';
export type ADD_TODO = typeof ADD_TODO;

export type AddTodo = ActionWithPayload<ADD_TODO, AxiosPromise<{}>>;
export type AddTodoPending = Action<ADD_TODO_PENDING>;
export type AddTodoFulfilled = ActionWithPayload<ADD_TODO_FULFILLED, AddResponse>;
export type AddTodoRejected = ActionWithError<ADD_TODO_REJECTED, AddResponse>;

export type AddTypes = AddTodoPending| AddTodoFulfilled| AddTodoRejected;