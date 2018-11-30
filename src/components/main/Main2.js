import React from 'react';
import './Main2.css';
import SignIn from '../SignIn/index';
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
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
  }

  render() {
    return(
      <div>
        <NavbarAuth />
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
      visible: false
    };
    this.handleMouseClick = this.handleMouseClick.bind(this);
    this.toggleSignIn = this.toggleSignIn.bind(this);
  }
  toggleSignIn() {
    this.setState({
      visible: !this.state.visible
    });
  }

  handleMouseClick(e) {
    this.toggleSignIn();
    console.log('clicked');
    e.stopPropagation();
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
              <button className="btn btn-primary" id="signin-button" onMouseDown={this.handleMouseClick}>Sign In</button>
            </div>
          </div>
        </div>
        <SignIn handleMouseDown={this.handleMouseDown} menuVisibility={this.state.visible}/>
        <Footer />
    </div>
    )
  }
}

export default Main2;
