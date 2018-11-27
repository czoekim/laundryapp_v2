import React, { Component } from 'react';
import './App.css';
// import Navbar from './components/navbar/Navbar';
import Navbar2 from './components/navbar/Navbar2';
// import Main from './components/main/Main';
import Main2 from './components/main/Main2';
import {BrowserRouter, Route} from 'react-router-dom';

import Footer from './components/footer/Footer';
import Sutton from './components/LaundryRoom/Sutton';


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
      <Route exact={true} path='/sutton/' render={()=>(
            <div className="App">
              <Navbar2 />
              <Sutton />
              <Footer />
            </div>
        )}/>
    </div>
  </BrowserRouter>
    );
  }
}

export default App;
