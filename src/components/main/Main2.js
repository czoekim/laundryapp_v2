import React from 'react';
import './Main2.css';
import SignIn from '../SignIn/index';
import SignUp from '../SignUp/index';
import { NavbarAuth } from '../navbar/Navbar2';
import { NavbarNonAuth } from '../navbar/Navbar2';
import { AuthUserContext } from '../Session';
import Footer from '../footer/Footer';

const Main2 = ({ authUser }) => (
  <div>
    <AuthUserContext.Consumer>
      {authUser => authUser ? <Main2Auth /> : <Main2NonAuth />}
    </AuthUserContext.Consumer>
  </div>
);

class Main2Auth extends React.Component {

  render() {
    return(
      <div>
        <NavbarAuth />
        <div className="HomePage">
          <div className="laundromat-container">
            <div className="welcome-container">
              <div className="welcome-text">
                <h1>Welcome back</h1>
                <div className="paragraph-bg">
                  <p>You bring your weeks worth of dirty clothes to the laundry room only
                  to find that everybody and their mothers have also decided to do their laundry, too.
                  You sadly lug your bag back to your room and contemplate all your life decisions. Well,
                  not anymore! <span className="emphasis">This is the future.</span> With us, you can know the status of the machines
                  in real time.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
    </div>
    )
  }
}


class Main2NonAuth extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signIn_visible: false,
      signUp_visible: false
    };
    // this.handleMouseClick = this.handleMouseClick.bind(this);
    this.toggleSignIn = this.toggleSignIn.bind(this);
    this.toggleSignUp = this.toggleSignUp.bind(this);
  }

  toggleSignIn() {
    this.setState({
      signIn_visible: !this.state.signIn_visible
    });
  }

  toggleSignUp() {
    this.setState({
      signUp_visible: !this.state.signUp_visible
    });

  }

  render() {
    return(
      <div>
        <NavbarNonAuth />
        <div className="HomePage">
          <div className="laundromat-container">
            <div className="welcome-container">
              <div className="welcome-text">
                <h1>It's Laundry Day.</h1>
                <div className="paragraph-bg">
                  <p>You bring your weeks worth of dirty clothes to the laundry room only
                  to find that everybody and their mothers have also decided to do their laundry, too.
                  You sadly lug your bag back to your room and contemplate all your life decisions. Well,
                  not anymore! <span className="emphasis">This is the future.</span> With us, you can know the status of the machines
                  in real time.</p>
                </div>
              </div>
              <div className="button-panel">
                <button className="btn btn-primary form-button" onMouseDown={this.toggleSignIn}>Sign In</button>
                <button className="btn btn-primary form-button"
                  style={{color: "#f0f0f0"}}onMouseDown={this.toggleSignUp}>Sign Up</button>
              </div>
            </div>
          </div>
        </div>
        <SignIn handleMouseDown={this.handleMouseDown} signInVisibility={this.state.signIn_visible}/>
        <SignUp handleMouseDown={this.handleMouseDown} signUpVisibility={this.state.signUp_visible}/>
      <Footer />
    </div>
    )
  }
}

export default Main2;
