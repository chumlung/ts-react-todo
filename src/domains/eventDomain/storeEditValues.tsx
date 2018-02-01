import { ActionWithPayload } from '../base';
import { SingleItem } from '../responseTypes/fetchResponse';

export const STORE_EDIT_VALUES = 'STORE_EDIT_VALUES';
export type STORE_EDIT_VALUES = typeof STORE_EDIT_VALUES;

export type storeEditValues = ActionWithPayload<STORE_EDIT_VALUES, SingleItem>;
