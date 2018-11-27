import React from 'react';
import './SignIn.css';

export default class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      name:'',
      email:'',
      residencehall:'',
    };
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeResHall = this.onChangeResHall.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

  }

  onChangeName(e) {
    this.setState({
      name: e.target.value
    });
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    });
  }

  onChangeResHall(e) {
    this.setState({
      residencehall: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();
  }

  render() {
    var visibility = "hide";
    if(this.props.menuVisibility) {
      visibility = "show";
    }
    return(
      <div id="flyoutSignIn"
      onMouseDown={this.props.handleMouseDown}
      className={visibility}>
        <form className="signin-form">
          <label className="signin-label">Name: </label>
          <input type="text" className="form-control"/>
          <label className="signin-label">Email: </label>
          <input type="text" className="form-control"/>
          <label className="signin-label">Residence Hall: </label>
          <input type="text" className="form-control"/>
          <input type="submit" value="Submit" className="btn btn-primary signin-submit"/>
        </form>
      </div>
    );
  }
}
