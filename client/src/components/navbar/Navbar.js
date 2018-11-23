import React from 'react';
import './Navbar.css';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div className="NavBar">
        <header className="home-page">
      		<div className="container">
      			<div id="branding">
      				<h1>Laundry Informational Technologies</h1>
      			</div>
      			<nav>
      				<ul>
      					<li className="current"><a href="/">Home</a></li>
                <div className="dropdown">
                  <button className="dropbtn">Residence Halls &#9660;</button>
                    <div className="dropdown-content">
                      <a href="/sutton">Sutton Place</a>
                      <a href="#">Elizabeth Hall</a>
                      <a href="#">Strong Hall</a>
                    </div>
                </div>
      					<li><a href="#">Contact</a></li>
      				</ul>
      			</nav>
      		</div>
      	</header>
      </div>
    );
  }
}


export default Navbar;
