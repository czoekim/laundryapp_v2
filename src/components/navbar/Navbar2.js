import React from 'react';
import './Navbar2.css';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';

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
            <Link to={ROUTES.LANDING} className="navbar-brand" >
            <h4 className="branding">Laundry Informational Technologies</h4></Link>
            <ul className="navbar-nav mr-auto" id="directoryLink">
              <li className="nav-item active">
                <Link to={ROUTES.HOME} className="nav-link">Home<span className="sr-only">(current)</span></Link>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" id="navbardrop" data-toggle="dropdown" href="/">
                Residence Halls
                </a>
                <div className="dropdown-menu">
                  <Link to={ROUTES.LANDING} className="dropdown-item">Sutton Place</Link>
                  <a className="dropdown-item" href="/">Elizabeth Hall</a>
                  <a className="dropdown-item" href="/">Strong Hall</a>
                </div>
              </li>
              <li className="nav-item"><a className="nav-link" href="/">Contact</a></li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}


export default Navbar2;
