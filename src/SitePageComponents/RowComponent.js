import React from 'react';
import '../App.css';
import { NavLink } from 'react-router-dom';

class RowComponent extends React.Component {
  render() {
    const { row } = this.props;

    return (
      <tr>
        <td>{row.id}</td>
        <td>{row.name1}</td>
        <td>{row.name2}</td>
        <td>{row.name3}</td>
        <td className="d-flex justify-content-between">
          { row.email }
          <NavLink to={`/users/${row.uniqueId}`} className="btn btn-dark rounded">
            <span className="material-icons icon-edit text-light">
              edit
            </span>
          </NavLink>
        </td>
      </tr>
    );
  }
}

export default RowComponent;
