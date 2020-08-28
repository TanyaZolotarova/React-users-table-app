import React from 'react';
import '../../App.css';

const FildsetNameComponent: React.FC <any> = ({ name, type, htmlFor, placeholder, valueC, onChangeC, name2, required}) => {

    return (

      <div className="form-group col-md-6">
        <fieldset className="form_border">
          <legend className="label_text">
            {' '}
            <label htmlFor={htmlFor}>{name2}</label>
          </legend>
          <input
            type={type}
            className="form-control input_border form_input"
            id="inputPassword4"
            placeholder={placeholder}
            required={required}
            pattern="^[A-Za-zА-Яа-яЁё]{4,}"
            name={name}
            value={valueC}
            onChange={onChangeC}
          />
        </fieldset>
      </div>

    );

}

export default FildsetNameComponent;
