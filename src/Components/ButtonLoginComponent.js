import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

const ButtonLoginComponent = ({ nameBtnRegister , link  }) => {


return (

      <Link to={link}>
        <button className="btnLogin" type="btn">{nameBtnRegister}</button>
      </Link>

    );
  }


export default ButtonLoginComponent;
