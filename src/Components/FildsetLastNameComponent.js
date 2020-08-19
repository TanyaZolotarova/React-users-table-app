import React from 'react';
import '../App.css';

class FildsetLastNameComponent extends React.Component {
  render() {
    const { name } = this.props;
    const { type } = this.props;
    const { htmlFor } = this.props;
    const { placeholder } = this.props;
    const { valueC } = this.props;
    const { onChangeC } = this.props;
    const { name2 } = this.props;
    const { ids } = this.props;

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
            required="required"
            pattern="^[A-Za-zА-Яа-яЁё]{4,}"
            value={valueC}
            onChange={onChangeC}
          />
        </fieldset>
      </div>

    );
  }
}

export default FildsetLastNameComponent;
