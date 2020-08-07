import React from 'react';
import '../App.css';
import TitleTextComponent from "./TitleTextComponent";
import FildsetNameComponent from "./FildsetNameComponent";
import FildsetLastNameComponent from "./FildsetLastNameComponent";
import FildsetEmailComponent from "./FildsetEmailComponent";
import FildsetLoginComponent from "./FildsetLoginComponent";
import FildsetPasswordComponent from "./FildsetPasswordComponent";
import BtnComponent from "./BtnComponent";
import ButtonLoginComponent from "./ButtonLoginComponent";
import {FormErrors} from "./FormErrors";



class FormRegisterComponent extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            formErrors: {email: '', password: ''},
            emailValid: false,
            passwordValid: false,
            formValid: false
        }
    }
    btnRes = () => {
        this.setState({ email: "", password: ""})
    }

    handleUserInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value},
            () => { this.validateField(name, value) });
    }

    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let emailValid = this.state.emailValid;
        let passwordValid = this.state.passwordValid;

        switch(fieldName) {
            case 'email':
                emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
                fieldValidationErrors.email = emailValid ? '' : 'Email не правильно введен';
                break;
            case 'password':
                passwordValid = value.length >= 6;
                fieldValidationErrors.password = passwordValid ? '': 'Пароль слишком короткий';
                break;
            default:
                break;
        }
        this.setState({formErrors: fieldValidationErrors,
            emailValid: emailValid,
            passwordValid: passwordValid
        }, this.validateForm);
    }

    validateForm() {
        this.setState({formValid: this.state.emailValid && this.state.passwordValid});
    }

    errorClass(error) {
        return(error.length === 0 ? '' : 'has-error');
    }


    render() {
        return (
            <div>

                <div className={'container form_block'}>
                    <form className={'bg-white'}>
                        <TitleTextComponent
                            text='title_block'
                            textH1='Регистрация'
                            textH2='Для регистрации укажите Ваши данные. Все текстовые поля обязательны для
                            заполнения'
                        />

                        <div className="form-row">
                            <FildsetNameComponent
                                name2='Имя'
                                type='text'
                                htmlFor='firstName'
                                placeholder='Имя'
                            />
                            <FildsetLastNameComponent
                                name2='Фамилия'
                                type='text'
                                htmlFor='lastName'
                                placeholder='Фамилия'
                            />
                        </div>
                        <FildsetEmailComponent
                            adress = {`email ${this.errorClass(this.state.formErrors.email)}`}
                            name2='Email'
                            type='text'
                            htmlFor='inputEmail4'
                            placeholder='Email'
                            valueC={this.state.email}
                            onChangeC={this.handleUserInput}
                            ids="email"
                            name = "email"
                        />
                        <div>
                        <FormErrors formErrors={this.state.formErrors.email} />
                        </div>
                        <FildsetLoginComponent
                            name2='Логин'
                            type='text'
                            htmlFor='username'
                            placeholder='Логин'
                        />
                        <FildsetPasswordComponent
                            adress = {`password ${this.errorClass(this.state.formErrors.password)}`}
                            name2='Пароль'
                            type='password'
                            htmlFor='inputPassword4'
                            valueC={this.state.password}
                            onChangeC={this.handleUserInput}
                            ids = "password"
                            name = "password"
                        />
                        <FormErrors formErrors={this.state.formErrors.password} />
                        <BtnComponent
                            btn="buttum flex"
                            nameBtn="Регистрация"
                            disableB = {!this.state.formValid}
                            btnA="btn btn-primary btn-lg active form_btn bttn"
                            btnB="btn btn-secondary btn-lg active form_buttun bttn"
                            res={this.btnRes}


                        />


                    </form>


                </div>
                <ButtonLoginComponent
                    link = "Login"
                    nameBtnRegister="Уже есть аккаунт? Вход"
                />
            </div>

        )
    }
}

export default FormRegisterComponent;