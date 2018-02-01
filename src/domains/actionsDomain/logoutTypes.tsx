import { AxiosPromise } from 'axios';

import { Action, ActionWithPayload, ActionWithError } from '../base';
import { LogoutResponse } from '../responseTypes/logoutResponse';

export const LOGOUT_PENDING = 'LOGOUT_PENDING';
export type LOGOUT_PENDING = typeof LOGOUT_PENDING;

export const LOGOUT_FULFILLED = 'LOGOUT_FULFILLED';
export type LOGOUT_FULFILLED = typeof LOGOUT_FULFILLED;

export const LOGOUT_REJECTED = 'LOGOUT_REJECTED';
export type LOGOUT_REJECTED = typeof LOGOUT_REJECTED;

export const LOGOUT = 'LOGOUT';
export type LOGOUT = typeof LOGOUT;

export type Logout = ActionWithPayload<LOGOUT, AxiosPromise<{}>>;
export type LogoutPending = Action<LOGOUT_PENDING>;
export type LogoutFulfilled = ActionWithPayload<LOGOUT_FULFILLED, LogoutResponse>;
export type LogoutRejected = ActionWithError<LOGOUT_REJECTED, {}>;

export type LogoutTypes = LogoutPending| LogoutFulfilled| LogoutRejected;