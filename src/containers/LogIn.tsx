import * as  React from 'react';
import history from '../history';
import { Component } from 'react';
import { connect } from 'react-redux';

import axios from '../axioService';
import { StateType } from '../domains/stateType';
import { changeCurrentUserValue, tryLoggingIn } from '../actions';

export interface EditProps {
  todos: StateType;
  attemptLogin(email: string): any;
  changeCurrentUserValue(event: any): any;
}

class LogIn extends Component<EditProps, any> {
  constructor(props: EditProps) {
    super (props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event: any) {
    event.preventDefault();
    this.props.attemptLogin(this.props.todos.currentUser.email);
  }
  componentDidUpdate() {
    if (this.props.todos.currentUser.userID !== 0) {
      history.push('/list');
    }
  }

  render() {
    return(
    <div>
      <div className="login">
      <input 
        name="email" 
        style={{width: 350}} 
        type="text"
        value={this.props.todos.currentUser.email}
        onChange={this.props.changeCurrentUserValue}
        placeholder="Example:johndoe@gmail.com"
      />
      <button onClick={this.handleSubmit}>LogIn</button>
      </div>
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
    changeCurrentUserValue: (event: any) => {
      dispatch(changeCurrentUserValue(event));
    },
    attemptLogin: (email: string) => {
      dispatch(tryLoggingIn(axios.post('http://127.0.0.1:8848/api/login', {
        user_email: email
      })));
    }
  };
};
const logInComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(LogIn);

export default logInComponent;