import * as moment from 'moment';

import { StateType } from '../domains/stateType';
import { actionTypes } from '../domains/actionTypes';

const INITIAL_STATE = {
  fetching: false,
  fetched: false,
  error: {},
  todos: [],
  singleTodo: {
    userID: 0,
    listID: 0,
    details: '',
    date: moment()
  },
  currentUser: {
    userID: 0,
    email: ''
  },
  metadata: {
    page: 1,
    pageCount: 0,
    pageSize: 5
  },
  searchValue: ''
};

export default (state: StateType = INITIAL_STATE, action: actionTypes) => {
  switch (action.type) {
    case 'FETCH_TODO_PENDING': {
      return {
        ...state,
        fetching: true,
        fetched: false
      };
    }
    case 'FETCH_TODO_FULFILLED': {
      return {
        ...state,
        todos: action.payload.data.data,
        fetched: true,
        fetching: false
      }; 
    }
    case 'FETCH_TODO_REJECTED': {
      return {
        ...state,
        fetching: false,
        error: action.payload
      };
    }
    case 'ADD_TODO_PENDING': {
      return {
        ...state,
        fetching: true,
        fetched: false
      };
    }
    case 'ADD_TODO_FULFILLED': {
      return {
        ...state,
        todos: [...state.todos, action.payload.data.data],
        fetched: true,
        fetching: false
      }; 
    }
    case 'ADD_TODO_REJECTED': {
      return {
        ...state,
        fetching: false,
        error: action.payload
      };
    }
    case 'DELETE_TODO_PENDING': {
      return {
        ...state,
        fetching: true,
        fetched: false
      };
    }
    case 'DELETE_TODO_FULFILLED': {
      return {
        ...state,
        todos: [...state.todos.filter((todo: {id: number}) =>
          todo.id !== parseInt(action.payload.data.deleteID, 10))],
        fetched: true,
        fetching: false
      };
    }
    case 'DELETE_TODO_REJECTED': {
      return {
        ...state,
        fetching: false,
        error: action.payload
      };
    }
    case 'SEARCH_TODO_PENDING': {
      return {
        ...state,
        fetching: true,
        fetched: false
      };
    }
    case 'SEARCH_TODO_FULFILLED': {
      return {
        ...state,
        todos: action.payload.data.data,
        metadata: {
          ...state.metadata,
          page : action.payload.data.metadata.page,
          pageCount : action.payload.data.metadata.pageCount,
          pageSize : action.payload.data.metadata.pageSize
        }
      };
    }
    case 'SEARCH_TODO_REJECTED': {
      return {
        ...state,
        fetching: false,
        error: action.payload
      };
    }
    case 'CHANGE_SEARCH_VALUE': {
      let event = action.payload;
      let target = event.currentTarget;
      let value = target.value;
      let name = target.name;
      return{
        ...state,
        [name]: value
      };
    }
    case 'EDIT_TODO_PENDING': {
      return {
        ...state,
        fetching: true,
        fetched: false
      };
    }
    case 'EDIT_TODO_FULFILLED': {
      let index: number = state.todos.findIndex((item: {id: number})  => 
          item.id === action.payload.data.data.id);
      return {
        ...state,
        todos: [
          ...state.todos.slice(0, index),
          action.payload.data.data,
          ...state.todos.slice(index + 1)
        ],
        fetched: true,
        fetching: false
      }; 
    }
    case 'EDIT_TODO_REJECTED': {
      return {
        ...state,
        fetching: false,
        error: action.payload
      };
    }
    case 'LOGIN_PENDING': {
      return {
        ...state,
        fetching: true,
        fetched: false
      };
    }
    case 'LOGIN_FULFILLED': {
      localStorage.setItem('userID', action.payload.data.data.userId.toString());
      localStorage.setItem('accessToken', action.payload.data.accessToken);
      return {
        ...state,
        currentUser: {
          ...state.currentUser, userID: action.payload.data.data.userId
        },
        fetched: true,
        fetching: false
      }; 
    }
    case 'LOGIN_REJECTED': {
      return {
        ...state,
        fetching: false,
        error: action.payload
      };
    }
    case 'LOGOUT_PENDING': {
      return {
        ...state,
        fetching: true,
        fetched: false
      };
    }
    case 'LOGOUT_FULFILLED': {
      localStorage.setItem('userID', '0');
      localStorage.removeItem('accessToken');
      return {
        ...state,
        currentUser: {
          userID: 0,
          email: ''
        },
        fetched: true,
        fetching: false
      }; 
    }
    case 'LOGOUT_REJECTED': {
      return {
        ...state,
        fetching: false,
        error: action.payload
      };
    }
    case 'HANDLE_CHANGE': {
      let event = action.payload;
      let target = event.currentTarget;
      let value = target.value;
      let name = target.name;
      return {
        ...state,
        singleTodo: {...state.singleTodo,
          [name]: value
        }
      };    
    }
    case 'CHANGE_TODO_DATE': {
      return{
        ...state,
        singleTodo: {...state.singleTodo,
          date: action.payload
        }
      };
    }
    case 'RESET_SINGLE_TODO': {
      return{
        ...state,
        singleTodo: {...state.singleTodo,
            listID: null,
            details: ''
        }
      };
    }
    case 'STORE_EDIT_VALUES': {
      return {
        ...state,
        singleTodo: {
          listID: action.payload.id,
          userID: action.payload.userId,
          details: action.payload.details
        }
      };
    }
    case 'CHANGE_CURRENT_USER': {
      let event = action.payload;
      let target = event.currentTarget;
      let value = target.value;
      let name = target.name;
      return{
        ...state,
        currentUser: {
          ...state.currentUser, [name]: value
        }
      }; 
    }
    default:
      return state;
  }
};