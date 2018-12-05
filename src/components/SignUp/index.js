import React from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { withFirebase } from '../Firebase';
import './signup.css';

import * as ROUTES from '../../constants/routes';

const INITIAL_STATE = {
  name: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  residencehall: '',
  error: null,
}

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state= {...INITIAL_STATE};
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onSubmit(e) {
    const { name, email, passwordOne, residencehall } = this.state;
    this.props.firebase
    .doCreateUserWithEmailAndPassword(email, passwordOne)
    .then(authUser => {
      return this.props.firebase.user(authUser.user.uid)
      .set({name, email, residencehall});
    })
    .then(authUser => {
      this.setState({ ...INITIAL_STATE });
      this.props.history.push(ROUTES.HOME);
    })
    .catch(err => {
      this.setState({ err });
    });
    e.preventDefault();
  };

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  };


  render() {
    const { name, email, passwordOne,passwordTwo, residencehall, error } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === '' ||
      email === '' ||
      name === '';

    var visibility = "hide";
    if(this.props.signUpVisibility) {
      visibility = "show";
    }
    return(
      <div id="flyoutSignUp"
        onMouseDown={this.props.handleMouseDown}
        className={visibility}>
        <h3>register</h3>
        <a className="close" >&times;</a>
        <form onSubmit={this.onSubmit}>
          <input
            name="name"
            value={name}
            onChange={this.onChange}
            type="text"
            placeholder="Full Name" />
          <input
            name="email"
            value={email}
            onChange={this.onChange}
            type="text"
            placeholder="Email Address" />
          <input
            name="passwordOne"
            value={passwordOne}
            onChange={this.onChange}
            type="password"
            placeholder="Password" />
          <input
            name="passwordTwo"
            value={passwordTwo}
            onChange={this.onChange}
            type="password"
            placeholder="Confirm Password" />
          <select className="signin-space form-control" id="residencespace"
            name="residencehall" value={residencehall} type="text" onChange={this.onChange}>
            <option>Pick your residence hall</option>
            <option value="Sutton">Sutton Place</option>
            <option value="Elizabeth">Elizabeth Hall</option>
            <option value="Strong">Strong Hall</option>
          </select>
          <button disabled={isInvalid} type="submit">Sign Up</button>
          {error && <p>{error.message}</p>}
        </form>
      </div>
    );
  }
}

const SignUpForm = compose(
  withRouter,
  withFirebase
)(SignUp);

export default SignUpForm;
