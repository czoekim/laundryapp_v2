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
      this.setState({ ...INITIAL_STATE});
    })
    .then(() => {
      this.props.firebase.doSignInWithEmailAndPassword(email, passwordOne);
    })
    .then(() => {
      this.props.history.push(ROUTES.HOME)
    })
    .catch(error => {
      this.setState({ error });
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
        <h3 className="FormTitle">register</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-section">
            <label for="namespace">Name</label>
            <input
              className="form-space"
              id="namespace"
              name="name"
              value={name}
              onChange={this.onChange}
              type="text"
              placeholder="Full Name" />
          </div>
          <div className="form-section">
            <label for="emailspace">Email</label>
            <input
              className="form-space"
              name="email"
              id="emailspace"
              value={email}
              onChange={this.onChange}
              type="text"
              placeholder="Email Address" />
          </div>
          <div className="form-section">
            <label for="passwordOnespace">Password</label>
            <input
              className="form-space"
              name="passwordOne"
              id="passwordOnespace"
              value={passwordOne}
              onChange={this.onChange}
              type="password"
              placeholder="Password" />
          </div>
          <div className="form-section">
            <label for="passwordTwospace">Confirm Password</label>
            <input
              className="form-space"
              name="passwordTwo"
              id="passwordTwospace"
              value={passwordTwo}
              onChange={this.onChange}
              type="password"
              placeholder="Confirm Password" />
          </div>
          <div className="form-section">
            <label for="residencespace">Residence Hall</label>
            <select className="form-space form-control" id="residencespace"
              name="residencehall" value={residencehall} type="text" onChange={this.onChange}>
              <option>Pick your residence hall</option>
              <option value="Sutton">Sutton Place</option>
              <option value="Elizabeth">Elizabeth Hall</option>
              <option value="Strong">Strong Hall</option>
            </select>
          </div>
          <button className="button-submit" id="signup-submit-button" disabled={isInvalid} type="submit">Sign Up</button>
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
