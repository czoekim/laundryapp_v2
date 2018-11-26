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
        <nav class="navbar navbar-expand-md navbar-dark bg-light">
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav"
            aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <a class="navbar-brand" href="/">
            <h4 class="branding">Laundry Informational Technologies</h4></a>
            <ul class="navbar-nav" id="directoryLink">
              <li class="nav-item active">
                <a class="nav-link" href="#">Home<span class="sr-only">(current)</span></a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
                Residence Halls
                </a>
                <div class="dropdown-menu">
                  <a class="dropdown-item" href="/sutton">Sutton Place</a>
                  <a class="dropdown-item" href="#">Elizabeth Hall</a>
                  <a class="dropdown-item" href="#">Strong Hall</a>
                </div>
              </li>
              <li class="nav-item"><a class="nav-link" href="#">Contact</a></li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}


export default Navbar2;
