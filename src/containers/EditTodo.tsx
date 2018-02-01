import * as React from 'react';
import { connect } from 'react-redux';

import axios from '../axioService';
import { StateType } from '../domains/stateType';
import { editTodo, handleChange, resetSingleTodo } from '../actions';

export interface EditProps {
  todos: StateType;
  editTodo(listID: number, userID: number, details: string): any;
  resetValues(): any;
  handleChange(): any;
}

const EditForm: React.SFC<EditProps> = (props: EditProps) => {

  let handleSubmit = (event: any) => {
    event.preventDefault();
    props.editTodo(
      props.todos.singleTodo.listID,
      props.todos.singleTodo.userID,
      props.todos.singleTodo.details
    );
    props.resetValues();
  };
  let handleCancel = (event: any) => {
    event.preventDefault();
    props.resetValues();
  };

  return(
    <form onSubmit={handleSubmit}>
    <div className="edit-todo">
      <textarea
        name="details"
        id="inputDetails" 
        value={props.todos.singleTodo.details}
        onChange={props.handleChange}
        placeholder={props.todos.singleTodo.details}
      />
      <button className="save-btn" onClick={handleSubmit}>Save</button>
      <button className="cancel-btn" onClick={handleCancel}>Cancel</button>
    </div>
    </form>
  );
};

const mapStateToProps = (state: StateType) => {
  return {
    todos : state
  };
};
const mapDispatchToProps = (dispatch: any) => {
  return{
    editTodo: (listId: number, userId: number, details: string) => {
      dispatch(editTodo(
        axios.put('http://127.0.0.1:8848/api/users/1/todos/' + listId, {
          userID: userId,
          details: details
        })
      ));
    },
    handleChange: (event: any) => {
      dispatch(handleChange(event));
    },
    resetValues: () => {
      dispatch(resetSingleTodo());
    }
  };
};
const Edit = connect(
  mapStateToProps,
  mapDispatchToProps
)(EditForm);

export default Edit;
