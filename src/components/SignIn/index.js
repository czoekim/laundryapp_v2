import React from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import './SignIn.css';
import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';

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
    var visibility = "hide";
    if(this.props.menuVisibility) {
      visibility = "show";
    }
    return (
      <div id="flyoutSignIn"
      onMouseDown={this.props.handleMouseDown}
      className={visibility}>
        <form className="signin-form" onSubmit={this.onSubmit}>
          <input className="signin-label"
            name="email" value={email} onChange={this.onChange}
            type="text" placeholder="Email Address" />
          <input className="signin-label"
            name="password" value={password} onChange={this.onChange}
            type="text" placeholder="Password" />
          <input className="signin-label"
            name="residencehall" value={residencehall} onChange={this.onChange}
            type="text" placeholder="Residence Hall" />
          <button disabled={isInvalid} type="submit" className="signin-submit">Sign In</button>
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
