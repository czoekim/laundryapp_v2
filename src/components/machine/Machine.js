import React from 'react';
import './Machine.css';
import RotateArrow from './rotate-arrow.png';

export default class Machine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      available: true,
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
    let machineStyle, imgStyle, buttonStatus;
    if(isAvailable) {
      machineStyle = {backgroundColor: 'green', color: 'white'};
      imgStyle = 'rotateImg';
      buttonStatus = 'Use';
    } else {
      machineStyle = {backgroundColor: 'red', color: 'white'};
      imgStyle = 'rotateImg rotateImgActive';
      buttonStatus = 'Free up';
    }
    return (
      <div>
        <div className="machine" style={machineStyle}>
          <h4 className="machineType">{this.props.machineType}</h4>
          <img className={imgStyle} src={RotateArrow} />
          <button className="machineButton" onClick={this.toggleMachineStatus}>{buttonStatus}</button>
        </div>
      </div>
    );
  }
}
