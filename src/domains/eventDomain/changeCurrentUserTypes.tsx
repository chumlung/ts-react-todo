import * as React from 'react';

import { ActionWithPayload } from '../base';

export const CHANGE_CURRENT_USER = 'CHANGE_CURRENT_USER';
export type CHANGE_CURRENT_USER = typeof CHANGE_CURRENT_USER;

export type changeCurrentUser = ActionWithPayload<CHANGE_CURRENT_USER, React.FormEvent<HTMLInputElement>>;
