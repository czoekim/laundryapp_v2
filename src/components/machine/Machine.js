import React from 'react';
import './Machine.css';
import RotateArrow from './rotate-arrow.png';

export default class Machine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      available: true,
      broken: false,
      user: ''
    };
    this.toggleMachineStatus = this.toggleMachineStatus.bind(this);
    this.reportBroken = this.reportBroken.bind(this);

  }

  toggleMachineStatus() {
    this.setState({
      available: !this.state.available,
    });
  }

  reportBroken() {
    this.setState({
      broken: true,
    })
  }



  render() {
    const isAvailable = this.state.available;
    let machineStyle, imgClass, buttonStatus, machineHeader,buttonStyle;
    if(!this.state.broken) {
      machineHeader = this.props.machineType + ' ' + this.props.machineNumber;
      if(isAvailable) {
        machineStyle = {
          background: 'radial-gradient(circle, #38ef7d, #11998e)', /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
        };
        imgClass = 'rotateImg';
        buttonStatus = 'Use';
      } else {
        machineStyle = {
          background: 'radial-gradient(circle, #ff6a00, #ee0979)', /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
        };
        imgClass = 'rotateImg rotateImgActive';
        buttonStatus = 'Free';
      }
    } else {
      machineStyle = {
        background: '#000000',
      }
      buttonStyle = {display:'none'}
      machineHeader = this.props.machineType + ' ' + this.props.machineNumber + ' | Out of Order';
      imgClass = 'rotateImgHide';
    }

    return (
      <div>
        <div className="machine" style={machineStyle}>
          <div className="machineStatus">
            <h4 className="machineType">{machineHeader}</h4>
            <img className={imgClass} src={RotateArrow} alt=''/>
          </div>
          <div className="buttonPanel" style={buttonStyle}>
            <button className="machineButton" onClick={this.toggleMachineStatus}>{buttonStatus}</button>
            <button className="machineButton" onClick={this.reportBroken}>Report Broken</button>
          </div>
        </div>
      </div>
    );
  }
}
