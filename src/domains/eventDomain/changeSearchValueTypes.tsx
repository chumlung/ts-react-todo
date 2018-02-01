import * as React from 'react';

import { ActionWithPayload } from '../base';

export const CHANGE_SEARCH_VALUE = 'CHANGE_SEARCH_VALUE';
export type CHANGE_SEARCH_VALUE = typeof CHANGE_SEARCH_VALUE;

export type changeSearchValue = ActionWithPayload<CHANGE_SEARCH_VALUE, React.FormEvent<HTMLTextAreaElement>>;
