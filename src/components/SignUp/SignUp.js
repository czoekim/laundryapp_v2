import React from 'react';
import './SignUp.css';
import axios from 'axios';

export default class SignUp extends React.Component {
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
    console.log(`Name: ${this.state.name} Email: ${this.state.email} Res Hall: ${this.state.residencehall}`);
    const serverport = {
      name: this.state.name,
      email: this.state.email,
      residencehall: this.state.residencehall
    }
    axios.post('http://localhost:4200/serverport/add', serverport)
    .then(res => console.log(res.data));
    this.setState({
      name:'',
      email:'',
      residencehall:''
    });
  }

  render() {
    return(
      <div>
        <form>
          <label>Name: </label>
          <input type="text" className="form-control"/>
          <label>Email: </label>
          <input type="text" className="form-control"/>
          <label>Residence Hall: </label>
          <input type="text" className="form-control"/>
          <input type="submit" value="Submit" className="btn btn-primary"/>
        </form>
      </div>
    );
  }
}
