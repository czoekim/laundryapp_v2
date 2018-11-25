import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class TableRow extends React.Component {
  render() {
    return(
      <tr>
        <td>
          {this.props.obj._id}
        </td>
        <td>
          {this.props.obj.name}
        </td>
        <td>
          {this.props.obj.email}
        </td>
        <td>
          {this.props.obj.residencehall}
        </td>
        <td>
          <Link to={"/edit/"+this.props.obj._id} className="btn btn-primary">Edit</Link>
        </td>
        <td>
          <button className="btn btn-danger">Delete</button>
        </td>
      </tr>
    );
  }
}
