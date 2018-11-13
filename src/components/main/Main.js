import React from 'react';
import './Main.css';
import laundryroom from './laundromat.jpg';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return(
      <div className="Main">
        <div className="image-container">
          <img id="laundryroom" src={laundryroom} alt='' />
          <div className="title">
            <h1>It&apos;s Laundry Day.</h1>
          </div>
          <div className="introduction">
            <h4>The answer to all of your problems:</h4>
            <p>Have you ever lugged your weeks worth of clothes to the laundry room,
            only to find that all of the machines are taken or broken. You&apos;re then faced with two choices:
            stay and watch other people's clothes go round and round or lug your dirty clothes
        back to your room, wait for an indefinite amount of time and try again later.
      Well, those days are no more! This is the future. With us, you can know the status of the machines
      in real time. <b>So buckle up.</b></p>
          </div>
      </div>
      <footer>
        <p>L.I.T., Copyright &copy; 2018</p>
      </footer>
    </div>
    );
  }
}


export default Main;
