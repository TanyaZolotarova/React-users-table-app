import React from 'react';
import '../App.css';

const FildsetPasswordComponent = ({ name, type, htmlFor,  valueC, onChangeC, name2, ids }) => {

    return (

      <div className="form-group">
        <fieldset className="form_border">
          <legend className="label_text">
            {' '}
            <label htmlFor={htmlFor}>{name2}</label>
          </legend>
          <input
            type={type}
            className="form-control input_border form_input "
            required="required"
            pattern="^[A-Za-zА-Яа-яЁё]{4,}"
            id={ids}
            name={name}
            value={valueC}
            onChange={onChangeC}
          />
        </fieldset>
      </div>

    );

}

export default FildsetPasswordComponent;
