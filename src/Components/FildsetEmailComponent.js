import React from 'react';
import '../App.css';

class FildsetEmailComponent extends React.Component {
  render() {
    const name2 = this.props.name;
    const { type } = this.props;
    const { htmlFor } = this.props;
    const { placeholder } = this.props;
    const { valueC } = this.props;
    const { onChangeC } = this.props;
    const { name } = this.props;

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
}

export default FildsetEmailComponent;
