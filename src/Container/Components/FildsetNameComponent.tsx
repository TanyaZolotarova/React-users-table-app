import * as React from 'react';
import '../../App.css';
import { ReactElement } from "react";
import { FildsetNameComponentInterface } from "../TypeScript/Interfaces/FildsetNameComponentInterface";





const FildsetNameComponent = (props: FildsetNameComponentInterface): ReactElement => {
    const {name, type,  placeholder, value, onChange, name2} = props;

    return (

        <div className="form-group col-md-6">
            <fieldset className="form_border">
                <legend className="label_text">
                    {' '}
                    <label >{name2}</label>
                </legend>
                <input
                    type={type}
                    className="form-control input_border form_input"
                    id="inputPassword4"
                    placeholder={placeholder}
                    pattern="^[A-Za-zА-Яа-яЁё]{4,}"
                    name={name}
                    value={value}
                    onChange={onChange}
                />
            </fieldset>
        </div>

    );

}

export default FildsetNameComponent;
