import * as React from 'react';
import '../../App.css';
import {Link} from 'react-router-dom';
import {ReactElement} from "react";
import {ButtonLoginComponentInterface} from "../TypeScript/Interfaces/ButtonLoginComponentInterface";




const ButtonLoginComponent = (props: ButtonLoginComponentInterface): ReactElement => {
    const {nameBtnRegister, link, type} = props;

    return (

        <Link to={link}>
            <button className="btnLogin" type={type}>{nameBtnRegister}</button>
        </Link>

    );
}


export default ButtonLoginComponent;
