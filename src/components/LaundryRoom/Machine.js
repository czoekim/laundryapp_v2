import React from 'react';
import './Machine.css';

export default class Machine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      available: false,
      broken: false
    };
    this.toggleMachineStatus = this.toggleMachineStatus.bind(this);
  }

  toggleMachineStatus() {
    this.setState({
      available: !this.state.available,
    });
  }

  render() {
    const isAvailable = this.state.available;
    let buttonStyle;
    if(!isAvailable) {
      buttonStyle = {color: 'white'};
    } else {
      buttonStyle = {backgroundColor: 'green', color:'white'};
    }
    return (
      <div>
        <button onClick={this.toggleMachineStatus} style={buttonStyle}>{this.props.machineType}</button>
      </div>
    );
  }
}
