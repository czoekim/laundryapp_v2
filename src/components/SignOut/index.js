import React from 'react';
import './SignOut.css';
import { withFirebase } from '../Firebase';
import { withRouter } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import { compose } from 'recompose';

class SignOutButton extends React.Component {
  constructor(props) {
    super(props);

    this.onSignOut = this.onSignOut.bind(this);
  }

  onSignOut(e) {
    this.props.firebase.doSignOut().then(() =>
    this.props.history.push(ROUTES.LANDING));
    e.preventDefault();
  }

  render() {
    return(
      <button id="signoutButton" type="button" onClick={this.onSignOut}>
      Sign Out
      </button>
    )
  }
}

const SignOut = compose(
  withRouter,
  withFirebase,
)(SignOutButton);

export default SignOut;
