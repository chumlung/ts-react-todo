import { AxiosPromise } from 'axios';

import { Action, ActionWithPayload, ActionWithError } from '../base';
import { FetchResponse } from '../responseTypes/fetchResponse';

export const FETCH_TODO_PENDING = 'FETCH_TODO_PENDING';
export type FETCH_TODO_PENDING = typeof FETCH_TODO_PENDING;

export const FETCH_TODO_FULFILLED = 'FETCH_TODO_FULFILLED';
export type FETCH_TODO_FULFILLED = typeof FETCH_TODO_FULFILLED;

export const FETCH_TODO_REJECTED = 'FETCH_TODO_REJECTED';
export type FETCH_TODO_REJECTED = typeof FETCH_TODO_REJECTED;

export const FETCH_TODO = 'FETCH_TODO';
export type FETCH_TODO = typeof FETCH_TODO;

export type FetchTodo = ActionWithPayload<FETCH_TODO, AxiosPromise<{}>>;
export type FetchTodoPending = Action<FETCH_TODO_PENDING>;
export type FetchTodoFulfilled = ActionWithPayload<FETCH_TODO_FULFILLED, FetchResponse>;
export type FetchTodoRejected = ActionWithError<FETCH_TODO_REJECTED, FetchResponse>;

export type FetchTypes = FetchTodoPending| FetchTodoFulfilled| FetchTodoRejected;