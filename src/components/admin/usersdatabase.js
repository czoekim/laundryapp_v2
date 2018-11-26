import React from 'react';
import Modal from 'react-modal';

export default class UsersDatabase extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }
  componentDidMount() {
    let self=this;
    fetch('.././backend/LaundryServer/routes/users', {
      method: 'GET'
    }).then(function(response) {
      if(response.status >= 400) {
        throw new Error('Bad response from server');
      }
      return response.json();
    }).then(function(data) {
      self.setState({users: data});
    }).catch(err => {
      console.log("Error: ", err);
    })
  }

  render() {
    return (
      <div className="container">
        <div className="panel panel-default p50 uth-panel">
          <table className="table table-hover">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Residence Hall</th>
              </tr>
            </thead>
            <tbody>
              {this.state.users.map(user =>
                <tr key={user.id}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.residencehall}</td>
                  <td><a>Edit</a>|<a>Delete</a></td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
