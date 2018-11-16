import React from 'react';
import './SignUp.css';

export default class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state={

    };
  }
  render() {
    return(
      <div>
        <div className="signUpContainer">
          <form id="form">
            <input className="input" type="text" placeholder="First Name"/>
            <input className="input" type="text" placeholder="Last Name" />
            <input className ="input" type="text" placeholder="Email" />
            <input className="input" type="text" placeholder="Password" />
            <button id="submit">Sign Up</button>
          </form>
        </div>
      </div>
    )
  }
}
