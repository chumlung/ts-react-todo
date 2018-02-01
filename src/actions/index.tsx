import * as React from 'react';
import { AxiosPromise } from 'axios';

import { AddTodo } from '../domains/actionsDomain/addTypes';
import { Login } from '../domains/actionsDomain/loginTypes';
import { EditTodo } from '../domains/actionsDomain/editTypes';
import { Logout } from '../domains/actionsDomain/logoutTypes';
import { FetchTodo } from '../domains/actionsDomain/fetchTypes';
import { DeleteTodo } from '../domains/actionsDomain/deleteTypes';
import { SearchTodo } from '../domains/actionsDomain/searchTypes';
import { SingleItem } from '../domains/responseTypes/fetchResponse';

import { changeTodoDate } from '../domains/eventDomain/changeTodoDate';
import { handleChange } from '../domains/eventDomain/handleChangeTypes';
import { storeEditValues } from '../domains/eventDomain/storeEditValues';
import { resetSingleTodo } from '../domains/eventDomain/resetSingleTodoTypes';
import { changeSearchValue } from '../domains/eventDomain/changeSearchValueTypes';
import { changeCurrentUser } from '../domains/eventDomain/changeCurrentUserTypes';

export function getTodo(payload: AxiosPromise<{}>): FetchTodo {
  return{
    type: 'FETCH_TODO',
    payload
  };
}

export function addTodo(payload: AxiosPromise<{}>): AddTodo {
  return{
    type: 'ADD_TODO',
    payload
  };
}

export function deleteTodo(payload: AxiosPromise<{}>): DeleteTodo {
  return{
    type: 'DELETE_TODO',
    payload
  };
}

export function editTodo(payload: AxiosPromise<{}>): EditTodo {
  return{
    type: 'EDIT_TODO',
    payload
  };
}

export function searchTodo(payload: AxiosPromise<{}>): SearchTodo {
  return{
    type: 'SEARCH_TODO',
    payload
  };
}

export function handleChange(event: React.FormEvent<HTMLInputElement>): handleChange {
  return{
    type: 'HANDLE_CHANGE',
    payload : event
  };
}

export function resetSingleTodo(): resetSingleTodo {
  return{
    type: 'RESET_SINGLE_TODO'
  };
}

export function storeEditValues(todo: SingleItem): storeEditValues {
  return{
    type: 'STORE_EDIT_VALUES',
    payload: todo
  };
}

export function changeSearchValue(event: React.FormEvent<HTMLTextAreaElement>): changeSearchValue {
  return{
    type: 'CHANGE_SEARCH_VALUE',
    payload: event
  };
}

export function changeCurrentUserValue(event: React.FormEvent<HTMLInputElement>): changeCurrentUser {
  return{
    type: 'CHANGE_CURRENT_USER',
    payload: event
  };
}

export function tryLoggingIn(payload: AxiosPromise<{}>): Login {
  return{
    type: 'LOGIN',
    payload
  };
}
export function logOut(payload: AxiosPromise<{}>): Logout {
  return{
    type: 'LOGOUT',
    payload
  };
}
export function changeTodoDate(payload: Date): changeTodoDate {
  return{
    type: 'CHANGE_TODO_DATE',
    payload
  };
}
