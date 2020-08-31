import * as React from 'react';
import '../../App.css';
import {ReactElement} from "react";
import {FildsetLastNameComponentInterface} from "../TypeScript/Interfaces/FildsetLastNameComponentInterface";




const FildsetLastNameComponent = (props: FildsetLastNameComponentInterface): ReactElement => {

    const {name, type,  placeholder, value, onChange, name2} = props;


    return (

        <div className="form-group ">
            <fieldset className="form_border">
                <legend className="label_text">
                    {' '}
                    <label >{name2}</label>
                </legend>
                <input
                    type={type}
                    className="form-control input_border form_input"
                    name={name}
                    placeholder={placeholder}
                    pattern="^[A-Za-zА-Яа-яЁё]{4,}"
                    value={value}
                    onChange={onChange}
                />
            </fieldset>
        </div>

    );

}

export default FildsetLastNameComponent;
