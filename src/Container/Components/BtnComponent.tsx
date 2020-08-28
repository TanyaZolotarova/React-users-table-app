import React from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';

const BtnComponent: React.FC <any> = ({ btn, btnA, btnB, nameBtn, disableB, onClick, link, type1, type2}) => {

    return (
      <div className={btn}>

        <Link to={link}>
          <button
            className={btnA}
            disabled={disableB}
            aria-pressed="true"
            type={type1}
          >
            {nameBtn}
          </button>
        </Link>
        <button
          className={btnB}
          aria-pressed="true"
          type={type2}
          onClick={onClick}
        >
          Сброс
        </button>

      </div>
    )
}


export default BtnComponent;
