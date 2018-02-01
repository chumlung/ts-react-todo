import * as React from 'react';
import * as moment from 'moment';
import { Component } from 'react';
import { connect } from 'react-redux';
import BigCalendar from 'react-big-calendar';
import HTML5Backend from 'react-dnd-html5-backend';
import { DragSource, DragDropContext } from 'react-dnd';
import 'react-big-calendar/lib/css/react-big-calendar.css';

import '../App.css';
import history from '../history';
import AddTodo from './AddTodo';
import axios from '../axioService';
import PageComponent from './Page';
import SearchTodo from './SearchTodo';
import EditComponent from './EditTodo';
import { ItemTypes } from '../Constants';
import { StateType } from '../domains/stateType';
import { SingleItem } from '../domains/responseTypes/fetchResponse';
import { getTodo, deleteTodo, storeEditValues, logOut } from '../actions';

BigCalendar.momentLocalizer(moment);

export interface AppProps {
  todos: StateType;
  getTodo(uID: number): any;
  deleteTodo(uID: number, index: number): any;
  logOut(uID: number): any;
  storeEditValues(): any;
  isDragging(): any;
  connectDragSource(x: any): any;
}
const listSource = {
  beginDrag(props: any) {
    return {
    };
  }
};
function collect(connects: any, monitor: any) {
  return {
    connectDragSource: connects.dragSource(),
    isDragging: monitor.isDragging()
  };
}
class App extends Component<AppProps, any> {
  constructor(props: AppProps) {
    super(props);    
    this.handleSearch = this.handleSearch.bind(this);
    this.handleLogOut = this.handleLogOut.bind(this);
  }
  getList(uID: number) {
    this.props.getTodo(uID);
  }
  componentDidMount() {
    let userID: number;
    let userIDFromStorage = localStorage.getItem('userID');
    if (userIDFromStorage) {
      userID = parseInt(userIDFromStorage, 10);
      if (userID !== 0) {
        this.getList(userID);
      } else {
        this.getList(userID);
      }
    }
  }

  handleDelete(uID: number, index: number) {
    this.props.deleteTodo(uID, index);
  }
  handleLogOut() {
    let userIDFromStorage = localStorage.getItem('userID');
    if (userIDFromStorage) {
      this.props.logOut(parseInt(userIDFromStorage, 10));
    }
  }
  componentDidUpdate() {
    let userIDFromStorage = localStorage.getItem('userID');
    if (userIDFromStorage) {
      if (parseInt(userIDFromStorage, 10) === 0) {
        history.push('/');
      }
    }
  }
  handleSearch(result: {}[]) {
    this.setState({ todos: result });
  }

  render() {
    const { isDragging, connectDragSource } = this.props;
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Todo List</h1>
          <button style={{float: 'right'}} onClick={this.handleLogOut}>LogOut</button>
          <SearchTodo/>
          {this.props.todos.searchValue === '' ? null : <PageComponent/>}
        </header>
        <BigCalendar 
          events={
            this.props.todos.todos.map((todo: StateType['singleTodo'], index: number) => ({
              allDay: true,
              start: todo.date,
              end: todo.date,
              title: todo.details
            }))
          }
        />
        <h4>Total todo-list count:{this.props.todos.todos.length}</h4>
          <ul className="todo-list">
            {this.props.todos.todos.map((todo:
            {
              id: number;
              date: Date;
              userId: number;
              details: string;
            // tslint:disable-next-line:align
            }, index: number) =>
            connectDragSource(
            <div style={{ opacity: isDragging ? 0.5 : 1 }} key={index}>
              <li className="list-item">
                <p className="list-item-info">{'UserID: ' + todo.userId}</p>
                <p className="list-item-info">{'ListID: ' + todo.id}</p>
                <p className="list-item-info">{'Details: ' + todo.details}</p>
                <p className="list-item-info">{'Date: ' + todo.date.toString().substring(0, 10)}</p>
                <button className="edit-btn" onClick={this.props.storeEditValues.bind(this, todo)}>Edit</button>
                <button 
                  className="delete-btn"
                  onClick={this.handleDelete.bind(this, todo.userId, todo.id)} 
                > 
                  Delete 
                </button>
              </li>
            </div>)
            )}
          </ul>
        {this.props.todos.singleTodo.listID != null ? <EditComponent/> : null}
        <AddTodo/>
      </div>
    );
  }
}

const mapStateToProps = (state: StateType) => {
  return {
    todos : state
  };
};
const mapDispatchToProps = (dispatch: any) => {
  return{
    getTodo: (uID: number) => {
      dispatch(getTodo(axios.get('http://127.0.0.1:8848/api/users/' + uID + '/todos')));
    },
    deleteTodo: (uID: number, index: number) => {
      dispatch(deleteTodo(axios.delete('http://127.0.0.1:8848/api/users/' + uID + '/todos/' + index)));
    },
    storeEditValues: (toEdit: SingleItem) => {
      dispatch(storeEditValues(toEdit));
    },
    logOut: (uID: number) => {
      dispatch(logOut(axios.delete('http://127.0.0.1:8848/api/logout/' + uID)));
    }
  };
};
const AppList = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
const ContainerApp = DragSource(ItemTypes.ITEM , listSource, collect)(AppList);
export default  DragDropContext(HTML5Backend)(ContainerApp);
