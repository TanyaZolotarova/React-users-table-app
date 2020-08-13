import React from 'react';
import '../App.css';

class FildsetNameComponent extends React.Component {
  render() {
    const { name } = this.props;
    const { type } = this.props;
    const { htmlFor } = this.props;
    const { placeholder } = this.props;
    const { valueC } = this.props;
    const { onChangeC } = this.props;
    const { name2 } = this.props;

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
            required="required"
            pattern="^[A-Za-zА-Яа-яЁё]{4,}"
            name={name}
            value={valueC}
            onChange={onChangeC}
          />
        </fieldset>
      </div>

    );
  }
}

export default FildsetNameComponent;
