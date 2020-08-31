import * as React from 'react';
import '../../App.css';
import {Link} from 'react-router-dom';
import {BtnComponentInterface} from "../TypeScript/Interfaces/BtnComponentInterface";
 import {ReactElement} from "react";


const BtnComponent = (props: BtnComponentInterface): ReactElement => {
    const {btn, btnA, btnB, nameBtn, onClick, link, type1, type2} = props;

    return (
        <div className={btn}>

            <Link to={link}>
                <button
                    className={btnA}

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
