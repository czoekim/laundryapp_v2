import React from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { withFirebase } from '../Firebase';

import { PasswordForgetLink } from '../PasswordForget';
import * as ROUTES from '../../constants/routes';
import './SignIn.css';

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};

class SignIn extends React.Component {
  constructor(props){
    super(props);
    this.state = {...INITIAL_STATE};
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onSubmit(e){
    const { email, password } = this.state;

    this.props.firebase
    .doSignInWithEmailAndPassword(email, password)
    .then(() => {
      this.setState({...INITIAL_STATE});
    }).catch((error) => {
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
    const { email, password, error} = this.state;
    const isInvalid = password === '' || email === '';
    var visibility  = "hide";
    if(this.props.signInVisibility) {
      visibility = "show";
    }

    return (
      <div id="flyoutSignIn"
      onMouseDown={this.props.handleMouseDown}
      className={visibility}>
        <h4 id="SignInTitle">sign in</h4>
        <form onSubmit={this.onSubmit}>
          <div className="form-section">
            <label for="emailspace">Email Address</label>
            <input className="form-space"id="emailspace"
              name="email" value={email} onChange={this.onChange}
              type="text" placeholder="Enter email" />
          </div>
          <div className="form-section">
            <label for="passwordspace">Password</label>
            <input className="form-space" id="passwordspace"
              name="password" value={password} onChange={this.onChange}
              type="password" placeholder="Enter Password" />
          </div>
          <button disabled={isInvalid} type="submit" className="button-submit">Sign In</button>
          <PasswordForgetLink />
          {error && <p style={{margin: '3px'}}>{error.message}</p>}
        </form>
      </div>
    );
  }
}

const SignInForm = compose(
  withRouter,
  withFirebase,
)(SignIn);

export default SignInForm;
