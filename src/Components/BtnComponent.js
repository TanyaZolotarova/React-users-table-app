import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

const BtnComponent = ({ btn, btnA, btnB, nameBtn, disableB, res, link}) => {

    return (
      <div className={btn}>

        <Link to={link}>
          <button
            className={btnA}
            disabled={disableB}
            aria-pressed="true"
            type="submit"
          >
            {nameBtn}
          </button>
        </Link>
        <button
          className={btnB}
          aria-pressed="true"
          type="reset"
          onClick={res}
        >
          Сброс
        </button>

      </div>
    )
}


export default BtnComponent;
