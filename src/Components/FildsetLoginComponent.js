import React from 'react';
import '../App.css';

class FildsetLoginComponent extends React.Component {
    render() {

        const name = this.props.name;
        const type = this.props.type;
        const htmlFor = this.props.htmlFor;
        const placeholder = this.props.placeholder;
        const valueC = this.props.valueC;
        const onChangeC = this.props.onChangeC;
        const name2 = this.props.name2;
        const ids = this.props.ids;


        return(

            <div className="form-group">
                <fieldset className={'form_border'}>
                    <legend className={'label_text'}> <label  htmlFor={htmlFor} >{name2}</label></legend>
                    <input type={type} className="form-control input_border form_input"  placeholder={placeholder}  required="required"
                           pattern="^[A-Za-zА-Яа-яЁё]{4,}" id={ids} name={name} value = {valueC}
                           onChange={onChangeC} />


                </fieldset>
            </div>



        );
    }
}

export default FildsetLoginComponent;