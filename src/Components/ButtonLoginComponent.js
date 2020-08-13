import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

class ButtonLoginComponent extends React.Component {
  render() {
    const { nameBtnRegister } = this.props;
    const { link } = this.props;

    return (

      <Link to={link}>
        <button className="btnLogin" type="btn">{nameBtnRegister}</button>
      </Link>

    );
  }
}

export default ButtonLoginComponent;
