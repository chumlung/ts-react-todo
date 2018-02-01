import * as React from 'react';
import { connect } from 'react-redux';

import axios from '../axioService';
import { StateType } from '../domains/stateType';
import { searchTodo, getTodo, changeSearchValue } from '../actions';

let delay = 500;
let callSearch: any;

export interface SearchProps {
  todos: StateType;
  searchTodo(userID: number, searchValue: string): any;
  changeSearchValue(event: any): any;
}

const SearchTodo: React.SFC<SearchProps> = (props: SearchProps) => {

  let startSearch = () => {
    callSearch = setTimeout(
      () => {
        props.searchTodo(props.todos.currentUser.userID, props.todos.searchValue);
      }, 
      delay);
  };

  let resetDelay = () => {
    clearTimeout(callSearch);
    delay = 500;
  };

  return(
    <div className="search-todo">
    <input
      name="searchValue"
      type="text" 
      id="inputSearchKey"
      value={props.todos.searchValue}
      onChange={props.changeSearchValue}
      onKeyUp={startSearch}
      onKeyDown={resetDelay}
      placeholder="Search.."
    />
    </div>
  );
};

const mapStateToProps = (state: StateType) => {
  return {
    todos : state
  };
};
const mapDispatchToProps = (dispatch: any) => {
  return{
    searchTodo: (uID: number, value: string) => {
      if (value) {
        dispatch(searchTodo(
          axios.get('http://127.0.0.1:8848/api/users/' + uID + '/todos/search?searchValue=' + value + '')
          )
        );
      } else {
        dispatch(getTodo(axios.get('http://127.0.0.1:8848/api/users/' + uID + '/todos')));
      }
    },
    changeSearchValue: (event: any) => {
      dispatch(changeSearchValue(event));
    }
  };
};
const searchComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchTodo);

export default searchComponent;
