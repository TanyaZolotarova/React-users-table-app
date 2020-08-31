import * as React from 'react';
import '../../App.css';
import { ReactElement} from "react";
import {FildsetPasswordComponentInterface} from "../TypeScript/Interfaces/FildsetPasswordComponentInterface";





const FildsetPasswordComponent = (props: FildsetPasswordComponentInterface): ReactElement => {
    const {name, type,  value, onChange, name2} = props;

    return (

        <div className="form-group">
            <fieldset className="form_border">
                <legend className="label_text">
                    {' '}
                    <label >{name2}</label>
                </legend>
                <input
                    type={type}
                    className="form-control input_border form_input "
                    pattern="^[A-Za-zА-Яа-яЁё]{4,}"
                    name={name}
                    value={value}
                    onChange={onChange}
                />
            </fieldset>
        </div>

    );

}

export default FildsetPasswordComponent;
