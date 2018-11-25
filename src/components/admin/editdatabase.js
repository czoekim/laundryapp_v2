import React from 'react';
import axios from 'axios';

export default class EditDatabase extends React.Component {
  constructor(props) {
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeResHall = this.onChangeResHall.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      name: '',
      email: '',
      residencehall: ''
    };
  }

  componentDidMount() {
    axios.get('https://localhost:4200/serverport/edit'+
  this.props.match.params.id).then(response => {
    this.setState({
      name: response.data.name,
      email: response.data.email,
      residencehall: response.data.residencehall
    });
    }).catch(function(err) {
      console.log(err);
    })
  }

  onChangeName(e) {
    this.setState ({
      name: e.target.value,
    });
  }

  onChangeEmail(e) {
    this.setState ({
      email: e.target.value
    });
  }

  onChangeResHall(e) {
    this.setState ({
      residencehall: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();
    const serverport = {
      name: this.state.name,
      email: this.state.email,
      residencehall: this.state.residencehall
    }
    axios.post('http://localhost:4200/serverport/update/'+this.props.match.params.id, serverport)
    .then(res => console.log(res.data));
    this.setState({
      name: '',
      email: '',
      residencehall: ''
    })
    this.props.history.push('/index');
  }

  render() {
    return (
      <div>
        <h3>Edit Users</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Add Name: </label>
            <input type="text" value={this.state.name} className="form-control" onChange={this.onChangeName} />
          </div>
          <div className="form-group">
            <label>Add Email: </label>
            <input type="text" value={this.state.email} className="form-control" onChange={this.onChangeEmail} />
          </div>
          <div className="form-group">
            <label>Add Res Hall: </label>
            <input type="text" value={this.state.residencehall} className="form-control" onChange={this.onChangeResHall} />
          </div>
          <div className="form-group">
            <input type="submit" value="Update user" className="btn btn-primary"/>
          </div>
        </form>
      </div>
    )
  }
}
