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
  residencehall: '',
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
    const { email, password, residencehall } = this.state;
    let yourResHall;
    switch(residencehall) {
      case 'Sutton':
        yourResHall = ROUTES.SUTTON;
        break;
      case 'Elizabeth':
        yourResHall = ROUTES.ELIZABETH;
        break;
      case 'Strong':
        yourResHall = ROUTES.STRONG;
        break;
      default:
        break;
    }

    this.props.firebase
    .doSignInWithEmailAndPassword(email, password)
    .then(() => {
      this.setState({...INITIAL_STATE});
      this.props.history.push(yourResHall);
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
    const { email, password, residencehall, error} = this.state;
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
        <form className="signin-form" onSubmit={this.onSubmit}>
          <div className="signin-section">
            <label for="emailspace">Email Address</label>
            <input className="signin-space"id="emailspace"
              name="email" value={email} onChange={this.onChange}
              type="text" placeholder="Enter email" />
          </div>
          <div className="signin-section">
            <label for="passwordspace">Password</label>
            <input className="signin-space" id="passwordspace"
              name="password" value={password} onChange={this.onChange}
              type="password" placeholder="Password" />
          </div>
          <div className="form-group signin-section">
            <label>Residence Hall:</label>
            <select className="signin-space form-control" id="residencespace"
              name="residencehall" value={residencehall} type="text" onChange={this.onChange}>
              <option>Pick your residence hall</option>
              <option value="Sutton">Sutton Place</option>
              <option value="Elizabeth">Elizabeth Hall</option>
              <option value="Strong">Strong Hall</option>
            </select>
          </div>
          <button disabled={isInvalid} type="submit" className="signin-submit">Sign In</button>
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
