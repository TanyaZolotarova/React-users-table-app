import React from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';

const ButtonLoginComponent: React.FC <any> = ({ nameBtnRegister , link , type }) => {


return (

      <Link to={link}>
        <button className="btnLogin" type={type}>{nameBtnRegister}</button>
      </Link>

    );
  }


export default ButtonLoginComponent;
