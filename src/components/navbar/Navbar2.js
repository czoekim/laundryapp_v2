import React from 'react';
import './Navbar2.css';

class Navbar2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div className="nav-container">
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav"
            aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <a className="navbar-brand" href="/">
            <h4 className="branding">Laundry Informational Technologies</h4></a>
            <ul className="navbar-nav mr-auto" id="directoryLink">
              <li className="nav-item active">
                <a className="nav-link" href="#">Home<span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
                Residence Halls
                </a>
                <div className="dropdown-menu">
                  <a className="dropdown-item" href="/sutton">Sutton Place</a>
                  <a className="dropdown-item" href="#">Elizabeth Hall</a>
                  <a className="dropdown-item" href="#">Strong Hall</a>
                </div>
              </li>
              <li className="nav-item"><a className="nav-link" href="#">Contact</a></li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}


export default Navbar2;
