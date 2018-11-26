import React from 'react';
import './Main.css';
import laundryroom from './laundromat.jpg';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users:[]
    };

    this.changeText = this.changeText.bind(this);
  }

  changeText(event) {
    this.setState({
      name: event.target.value
    });
  }


  render() {
    return(
      <div className="Main">
        <div className="image-container">
          <div className="image">
            <img id="laundryroom" src={laundryroom} alt='' />
            <div className="imgtext">
              <h1>It&apos;s Laundry Day.</h1>
            </div>
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
          <div>
            <h1>Users</h1>
            {this.state.users.map(user=>
              <div key={user.id}>{user.username}</div>
            )}
          </div>
        </div>
      </div>
    );
  }
}


export default Main;
