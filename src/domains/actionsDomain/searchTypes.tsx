import { AxiosPromise } from 'axios';

import { Action, ActionWithPayload, ActionWithError } from '../base';
import { SearchResponse } from '../responseTypes/searchResponse';

export const SEARCH_TODO_PENDING = 'SEARCH_TODO_PENDING';
export type SEARCH_TODO_PENDING = typeof SEARCH_TODO_PENDING;

export const SEARCH_TODO_FULFILLED = 'SEARCH_TODO_FULFILLED';
export type SEARCH_TODO_FULFILLED = typeof SEARCH_TODO_FULFILLED;

export const SEARCH_TODO_REJECTED = 'SEARCH_TODO_REJECTED';
export type SEARCH_TODO_REJECTED = typeof SEARCH_TODO_REJECTED;

export const SEARCH_TODO = 'SEARCH_TODO';
export type SEARCH_TODO = typeof SEARCH_TODO;

export type SearchTodo = ActionWithPayload<SEARCH_TODO, AxiosPromise<{}>>;
export type SearchTodoPending = Action<SEARCH_TODO_PENDING>;
export type SearchTodoFulfilled = ActionWithPayload<SEARCH_TODO_FULFILLED, SearchResponse>;
export type SearchTodoRejected = ActionWithError<SEARCH_TODO_REJECTED, {}>;

export type SearchTypes = SearchTodoPending| SearchTodoFulfilled| SearchTodoRejected;