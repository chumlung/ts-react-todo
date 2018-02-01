import * as React from 'react';

import { ActionWithPayload } from '../base';

export const HANDLE_CHANGE = 'HANDLE_CHANGE';
export type HANDLE_CHANGE = typeof HANDLE_CHANGE;

export type handleChange = ActionWithPayload<HANDLE_CHANGE, React.FormEvent<HTMLInputElement>>;
