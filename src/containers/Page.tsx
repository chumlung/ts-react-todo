import * as React from 'react';
import { connect } from 'react-redux';

import axios from '../axioService';
import { searchTodo } from '../actions';
import { StateType } from '../domains/stateType';

export interface PageProps {
  todos: StateType;
  searchTodo(userID: number, searchValue: string, page: number): any;
}

const pageComponent: React.SFC<PageProps> = (props: PageProps) => {
  let startSearch = (page: number) => {
    props.searchTodo(
      props.todos.currentUser.userID,
      props.todos.searchValue,
      page);
  };
  let handleNextClick = () => {
    if (props.todos.metadata.page < props.todos.metadata.pageCount) {
      startSearch(props.todos.metadata.page + 1);
    } else {
      alert('Already at Last page');
    } 
  };
  let handlePrevClick = () => {
    if (props.todos.metadata.page > 1) {
      startSearch(props.todos.metadata.page - 1);
    } else {
      alert('Already at First Page');
    }
  };
  return(
    <div className="search-todo">
      <button onClick={handlePrevClick}>Previous</button>
      <button onClick={handleNextClick}>Next</button>
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
    searchTodo: (uID: number, value: string, page: number) => {
      if (value) {
        dispatch(searchTodo(
          axios.get('http://127.0.0.1:8848/api/users/' + uID + '/todos/search?searchValue=' + value
          + '&page=' + page)
          )
        );
      }
    }
  };
};
const searchComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(pageComponent);

export default searchComponent;
