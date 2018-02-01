import { Moment } from 'moment';

interface Momentdd extends Moment {
  _d?: Date;
}

export interface StateType {
  fetching: boolean;
  fetched: boolean;
  error: object;
  todos: object[];
  singleTodo: {
    listID: number,
    userID: number,
    details: string,
    date: Momentdd; 
  };
  currentUser: {
    userID: number;
    email: string;
  };
  metadata: {
    page: number;
    pageCount: number;
    pageSize: number;
  };
  searchValue: string;
}