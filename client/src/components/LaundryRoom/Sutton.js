import React from 'react';
import './Sutton.css';
import Machine from '../machine/Machine';

class Sutton extends React.Component {
  render() {
    return (
      <div className="sutton-container">
        <div className="Washers">
          <h3 className="machineHeader">Washers</h3>
          <div className="machines">
            <Machine machineType="Washer" machineNumber="1"/>
            <Machine machineType="Washer" machineNumber="2"/>
            <Machine machineType="Washer" machineNumber="3"/>
          </div>
        </div>
        <div className="Dryers">
          <h3 className="machineHeader">Dryers</h3>
          <div className="machines">
            <Machine machineType="Dryer" machineNumber="1"/>
            <Machine machineType="Dryer" machineNumber="2"/>
            <Machine machineType="Dryer" machineNumber="3"/>
          </div>
        </div>
      </div>
    )
  }
}

export default Sutton;
