import React from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { withFirebase } from '../Firebase';
import { PopupboxManager, PopupboxContainer } from 'react-popupbox';
import { PasswordForgetLink } from '../PasswordForget';
import * as ROUTES from '../../constants/routes';

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null
}

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
    this.onChange = this.onChange.bind(this);
  }

  onSubmit(e) {

  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  openPopupBox() {
    const content = (
      <div>
        <h1>HELLO?</h1>
      </div>
    )
    PopupboxManager.open({ content });
  }

  render() {
    const {
      email,
      password,
      error
    } = this.state;

    const isInvalid = password === '' || email === '';

    return (
      <div className="sign-in-content">
        <span className="close-button">&times;</span>
        <h4>sign in</h4>
        <form className="sign-in-form" onSubmit={this.onSubmit}>
          <div className="sign-in-section">
            <label for="emailspace">Email Address</label>
            <input className="sign-in-space" id="emailspace"
            name="email" value={email} onChange={this.onChange}
            type="text" placeholder="Enter email" />
          </div>
          <div className="sign-in-section">
            <label for="passwordspace">Password</label>
            <input className="sign-in-space" id="password"
            name="password" value={password} onChange={this.onChange}
            type="password" placeholder="Enter Password" />
          </div>
          <button disabled={isInvalid} type="submit" className="sign-in-submit">
            Sign In
          </button>
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
