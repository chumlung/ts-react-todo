import { AddTypes } from './actionsDomain/addTypes';
import { EditTypes } from './actionsDomain/editTypes';
import { FetchTypes } from './actionsDomain/fetchTypes';
import { LoginTypes } from './actionsDomain/loginTypes';
import { LogoutTypes } from './actionsDomain/logoutTypes';
import { DeleteTypes } from './actionsDomain/deleteTypes';
import { SearchTypes } from './actionsDomain/searchTypes';

import { changeTodoDate } from './eventDomain/changeTodoDate';
import { handleChange } from './eventDomain/handleChangeTypes';
import { storeEditValues } from './eventDomain/storeEditValues';
import { resetSingleTodo } from './eventDomain/resetSingleTodoTypes';
import { changeSearchValue } from './eventDomain/changeSearchValueTypes';
import { changeCurrentUser } from './eventDomain/changeCurrentUserTypes';

export type actionTypes = FetchTypes 
  | AddTypes
  | EditTypes 
  | DeleteTypes
  | SearchTypes
  | LoginTypes
  | LogoutTypes
  | changeSearchValue
  | handleChange
  | changeTodoDate
  | resetSingleTodo
  | storeEditValues
  | changeCurrentUser;