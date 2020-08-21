import React from 'react';
import '../App.css';
import { NavLink } from 'react-router-dom';


class RowComponent extends React.Component {
  render() {
      const { row, index } = this.props;

    return (
      <tr>
        <td>{row.id}</td>
        <td>{row.name1}</td>
        <td>{row.name2}</td>
        <td>{row.name3}</td>
        <td> { row.email }</td>
        <td>
            <NavLink to={`/users/${index}`} className="btn btn-dark rounded ">
              <span>
                edit
              </span>
            </NavLink>
        </td>






      </tr>
    );
  }
}

export default RowComponent;
