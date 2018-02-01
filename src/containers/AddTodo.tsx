import * as React from 'react';
import { connect } from 'react-redux';
import DatePicker from 'react-datepicker';

import axios from '../axioService.js';
import { StateType } from '../domains/stateType';
import 'react-datepicker/dist/react-datepicker.css';
import { addTodo, handleChange, resetSingleTodo, changeTodoDate } from '../actions';

export interface AddProps {
  todos: StateType;
  addTodo(userID: number, details: string, date: any, tagsID: number[]): any;
  resetValues(): any;
  handleChange(): any;
  handleDateChange(): any;
}

const AddTodo: React.SFC<AddProps> = (props: AddProps) => {
  
  let tags: string[] = ['Learn', 'Work', 'Movie', 'Gadgets', 'Games', 'Food'];
  let tagsID: number[] = [];
  let toggleCheckbox = (event: React.ChangeEvent<HTMLInputElement>) => {
    let selectedID: number = tags.findIndex((tag: string) => tag === event.target.name) + 1;
    if (event.target.checked) {
      tagsID = [...tagsID, selectedID];
    } else {
      tagsID = tagsID.filter((tagID) => tagID !== selectedID);
    }
  };

  let handleSubmit = (event: any) => {
    event.preventDefault();
    props.addTodo(props.todos.currentUser.userID,
                  props.todos.singleTodo.details,
                  props.todos.singleTodo.date._d,
                  tagsID);
    props.resetValues();
  };

  return(
    <div>
      <h4>Add new todo</h4>
      <form className="todo-form" onSubmit={handleSubmit}>
      <div className="form-UserId">
        <label htmlFor="inputTodoUserId">UserId: {props.todos.currentUser.userID} </label>
      </div>
      {props.todos.singleTodo.listID === null ?
        <div className="form-details">
          <label htmlFor="inputdetails">Details: </label>
            <textarea 
                      name="details" 
                      id="inputdetails" 
                      value={props.todos.singleTodo.details}
                      onChange={props.handleChange}
                      placeholder="Details" 
            />
            <div>
            <label>Date:</label>
              <DatePicker selected={props.todos.singleTodo.date} onChange={props.handleDateChange}/>
            </div>
            <div>
            {tags.map((labels) =>
              <label key={labels}>
                <input 
                  type="checkbox" 
                  name={labels} 
                  defaultChecked={false} 
                  onChange={toggleCheckbox}
                />
                {labels}
              </label>
            )}
            </div>
        <button onClick={handleSubmit}>Add Todo</button>
        </div>
        : <p>Cannot add while in edit</p>}
      </form>

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
    addTodo: (userId: number, details: string, date: Date, tagsID: number[]) => {
      dispatch(addTodo(axios.post('http://127.0.0.1:8848/api/users/' + userId + '/todos', {
        userID: userId,
        details: details,
        date: date,
        tags: tagsID
      })));
    },
    handleChange: (event: any) => {
      dispatch(handleChange(event));
    },
    resetValues: () => {
      dispatch(resetSingleTodo());
    },
    handleDateChange: (date: Date) => {
      dispatch(changeTodoDate(date));
    }
  };
};
const add = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddTodo);

export default add;
