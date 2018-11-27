import React from 'react';
import './Main2.css';

export default class Main2 extends React.Component {
  render() {
    return(
      <div className="HomePage">
        <div className="laundromat-container">
          <div className="welcome-container">
            <div className="welcome-text">
              <h1>It's Laundry Day.</h1>
              <div className="paragraph-bg">
                <p>You bring your weeks' worth of dirty clothes to the laundry room only
                to find that everybody and their mothers have also decided to their laundry, too.
                You sadly lug your bag back to your room and contemplate all your life decisions. Well,
                not anymore! <span className="emphasis">This is the future.</span> With us, you can know the status of the machines
                in real time.</p>
              </div>
            </div>
            <a className="btn btn-primary" id="morebutton" href="/signup">Sign Up</a>
          </div>
        </div>
      </div>
    )
  }
}
