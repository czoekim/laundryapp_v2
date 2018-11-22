import React, { Component } from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Main from './components/main/Main';
import {BrowserRouter, Route} from 'react-router-dom';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';
import Footer from './components/footer/Footer';
import Machine from './components/machine/Machine';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }


  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact={true} path='/' render={()=>(
              <div className="App">
                <Navbar />
                <Main />
                <Footer />
              </div>
          )}/>
        <Route exact={true} path='/signin' render={()=>(
            <div className="App">
                <SignIn />
              </div>
          )}/>
        <Route exact={true} path='/signup/' render={()=>(
            <div className="App">
              <SignUp />
            </div>
        )}/>
      <Route exact={true} path='/laundryroom/' render={()=>(
            <div className="App">
              <Machine machineType="Washer"/>
              <Machine machineType="Dryer"/>
              <Footer />
            </div>
        )}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
