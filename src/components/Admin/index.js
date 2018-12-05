import React from 'react';
import { withFirebase } from '../Firebase';

class Admin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      users: [],
    };
  }

  componentDidMount() {
    this.setState({ loading: true });

    this.props.firebase.users().on('value', snapshot => {
      const usersObject = snapshot.val();
      const usersList = Object.keys(usersObject).map(key=>({
        ...usersObject[key],
        uid: key,
      }));
      this.setState({
        users: usersList,
        loading: false
      });
    });
  }

  componentWillUnmount() {
    this.props.firebase.users().off();
  }

  render() {
    const { users, loading } = this.state;
    return(
      <div>
        <h1>Admin</h1>
        {loading && <div>Loading...</div>}
        <UserList users={users} />
      </div>
    );
  }
}

const UserList = ({ users }) => (
  <ul>
    {users.map(user => (
      <li key={user.uid}>
        <span>
          <strong>ID:</strong> {user.uid}
        </span>
        <span>
          <strong>NAME:</strong> {user.name}
        </span>
        <span>
          <strong>EMAIL:</strong> {user.email}
        </span>
        <span>
          <strong>RESHALL:</strong> {user.residencehall}
        </span>
      </li>
    ))}
  </ul>
);

export default withFirebase(Admin);
// const condition = authUser => authUser && authUser.roles.includes(ROLES.ADMIN);
// export default withAuthorization(condition)(AdminPage);
// export default withFirebase(Admin);
