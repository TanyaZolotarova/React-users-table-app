import React from 'react';
import '../App.css';
import { NavLink } from 'react-router-dom';
import { TrashIcon } from '@primer/octicons-react';

class RowComponent extends React.Component {
  render() {
      const { row, index } = this.props;

    return (
      <tr>
        <td>{row.id}</td>
        <td>{row.name1}</td>
        <td>{row.name2}</td>
        <td>{row.name3}</td>
        <td className="d-flex justify-content-between">
          { row.email }

          <div>

            <NavLink to={`/users/${index}`} className="btn btn-dark rounded ">
              <span>
                edit
              </span>
            </NavLink>


          </div>
        </td>
      </tr>
    );
  }
}

export default RowComponent;
