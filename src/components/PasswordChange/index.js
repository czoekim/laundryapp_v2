import React from 'react';
import { withFirebase } from '../Firebase';

const INITIAL_STATE = {
  passwordOne: '',
  passwordTwo: '',
  error: null,
};

class PasswordChangeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {...INITIAL_STATE};
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onSubmit(e) {
    const { passwordOne } = this.state;
    this.props.firebase
    .doPasswordUpdate(passwordOne)
    .then(() => {
      this.setState({...INITIAL_STATE});
    }).catch(err => {
      this.setState({ err });
    });
    e.preventDefault();
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { passwordOne, passwordTwo, error } = this.state;
    const isInvalid = passwordOne !== passwordTwo || passwordOne === '';

    return (
      <form onSubmit={this.onSubmit}>
        <input name="passwordOne" value={passwordOne}
        onChange={this.onChange} type="password" placeholder="New Password" />
        <input name="passwordTwo" value={passwordTwo}
        onChange={this.onChange} type="password" placehodler="Confirm New Password" />
        <button disabled={isInvalid} type="submit">
         Reset My Password
        </button>
        {error && <p>{error.message}</p>}
      </form>
    );
  }
}
export default withFirebase(PasswordChangeForm);
