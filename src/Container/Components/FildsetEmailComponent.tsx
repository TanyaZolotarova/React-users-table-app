import * as React from 'react';
import '../../App.css';
import {ReactElement} from "react";
import {FildsetEmailComponentInterface} from "../TypeScript/Interfaces/FildsetEmailComponentInterface";




const FildsetEmailComponent = (props: FildsetEmailComponentInterface): ReactElement => {

    const {name2, type, placeholder, value, onChange, name} = props;

    return (

        <div className="form-group">

            <fieldset className="form_border">

                <legend className="label_text">
                    <label>{name2}</label>
                </legend>
                <input
                    type={type}
                    className="form-control input_border form_input "
                    placeholder={placeholder}
                    name={name}
                    value={value}
                    onChange={onChange}
                />

            </fieldset>

        </div>

    );

}

export default FildsetEmailComponent;
