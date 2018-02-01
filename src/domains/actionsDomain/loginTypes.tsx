import { AxiosPromise } from 'axios';

import { Action, ActionWithPayload, ActionWithError } from '../base';
import { LoginResponse } from '../responseTypes/loginResponse';

export const LOGIN_PENDING = 'LOGIN_PENDING';
export type LOGIN_PENDING = typeof LOGIN_PENDING;

export const LOGIN_FULFILLED = 'LOGIN_FULFILLED';
export type LOGIN_FULFILLED = typeof LOGIN_FULFILLED;

export const LOGIN_REJECTED = 'LOGIN_REJECTED';
export type LOGIN_REJECTED = typeof LOGIN_REJECTED;

export const LOGIN = 'LOGIN';
export type LOGIN = typeof LOGIN;

export type Login = ActionWithPayload<LOGIN, AxiosPromise<{}>>;
export type LoginPending = Action<LOGIN_PENDING>;
export type LoginFulfilled = ActionWithPayload<LOGIN_FULFILLED, LoginResponse>;
export type LoginRejected = ActionWithError<LOGIN_REJECTED, {}>;

export type LoginTypes = LoginPending| LoginFulfilled| LoginRejected;