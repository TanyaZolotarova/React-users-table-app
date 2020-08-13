import React from 'react';
import '../App.css';

class RowComponent extends React.Component {
  render() {
    const { row } = this.props;

    return (
      <tr>
        <td>{row.id}</td>
        <td>{row.name1}</td>
        <td>{row.name2}</td>
        <td>{row.name3}</td>
        <td>{row.email}</td>
      </tr>
    );
  }
}

export default RowComponent;
