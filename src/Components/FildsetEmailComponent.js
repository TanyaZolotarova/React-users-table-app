import React from 'react';
import '../App.css';

const FildsetEmailComponent = ({name2, type, htmlFor, placeholder, valueC, onChangeC, name }) => {

  return (

      <div className="form-group">

        <fieldset className="form_border">

          <legend className="label_text">
            <label htmlFor={htmlFor}>{name2}</label>
          </legend>
          <input
            type={type}
            className="form-control input_border form_input "
            placeholder={placeholder}
            required="required"
            name={name}
            value={valueC}
            onChange={onChangeC}
          />

        </fieldset>

      </div>

    );

}

export default FildsetEmailComponent;
