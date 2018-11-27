import React, { Component } from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Navbar2 from './components/navbar/Navbar2';
import Main from './components/main/Main';
import Main2 from './components/main/Main2';
import {BrowserRouter, Route} from 'react-router-dom';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';
import Footer from './components/footer/Footer';
import Machine from './components/machine/Machine';
import Sutton from './components/LaundryRoom/Sutton';
import AdminDatabase from './components/admin/usersdatabase';

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
                <Navbar2 />
                <Main2 />
                <Footer />
              </div>
          )}/>
        <Route exact={true} path='/main2' render={()=>(
            <div className="App">
                <Navbar2 />
                <Main2 />
                <Footer />
            </div>
          )}/>
        <Route exact={true} path='/signup/' render={()=>(
            <div className="App">
              <SignUp />
            </div>
        )}/>
      <Route exact={true} path='/sutton/' render={()=>(
            <div className="App">
              <Navbar2 />
              <Sutton />
              <Footer />
            </div>
        )}/>
      <Route exact={true} path='/admindatabase/' render={()=>(
            <div className="App">
              <AdminDatabase />
            </div>
        )}/>
    </div>
  </BrowserRouter>
    );
  }
}

export default App;
