import React from 'react';
import '../../App.css';

const FildsetLastNameComponent: React.FC <any> = ({ name, type, htmlFor, placeholder, valueC, onChangeC, name2, ids, required }) => {


    return (

      <div className="form-group ">
        <fieldset className="form_border">
          <legend className="label_text">
            {' '}
            <label htmlFor={htmlFor}>{name2}</label>
          </legend>
          <input
            type={type}
            className="form-control input_border form_input"
            id={ids}
            name={name}
            placeholder={placeholder}
            required={required}
            pattern="^[A-Za-zА-Яа-яЁё]{4,}"
            value={valueC}
            onChange={onChangeC}
          />
        </fieldset>
      </div>

    );

}

export default FildsetLastNameComponent;
