import React from 'react';
import '../App.css';
import TitleTextComponent from './TitleTextComponent';
import FildsetNameComponent from './FildsetNameComponent';
import FildsetLastNameComponent from './FildsetLastNameComponent';
import FildsetEmailComponent from './FildsetEmailComponent';
import FildsetLoginComponent from './FildsetLoginComponent';
import FildsetPasswordComponent from './FildsetPasswordComponent';
import BtnComponent from './BtnComponent';
import ButtonLoginComponent from './ButtonLoginComponent';

import {connect} from "react-redux";
import {setErrors, setField, setLoggedIn, clearForm} from "/home/tanya/PhpstormProjects/untitled8/src/Redux/actions/registration.js";



class FormRegisterComponent extends React.Component {


    fields = {
        username: '',
        email: '',
        surname: '',
        login: '',
        password:'',
    };

    componentDidMount() {
        this.props.clearForm(this.fields);
    };

    handleChange = ({target}) => {
        this.props.setField(target)
    };

    submitUserRegistrationForm = (e) => {
        e.preventDefault();
        const errors = this.validateForm();
        if (Object.keys(errors).length === 0) {
            this.props.isLogged(this.fields);
        } else {
            this.props.setErrors(errors);
        }
    };

    validateForm = () => {
        let fields = this.props.fields;
        let errors = {};

        /* eslint-disable no-unused-expressions */

        !fields["username"]
            ? errors["username"] ="Пожалуйста, введите имя."
            : !fields["username"].match('^[A-Za-zА-Яа-яЁё]{2,60}')
            ? errors["username"] ="Пожалуйста, заполните поле правильно."
            : null;

        !fields["surname"]
            ? errors["surname"]="Пожалуйста, введите фамилию."
            : !fields["surname"].match('^[A-Za-zА-Яа-яЁё]{2,60}')
            ? errors["surname"]="Фамилия может содержать только буквы."
            : null;

        !fields["email"]
            ? errors["email"]="Пожалуйста, введите e-mail."
            : !fields["email"].match('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')
            ? errors["email"]="Напишите правильный e-mail."
            : null;

        !fields["login"]
            ? errors["login"]="Пожалуйста, введите логин."
            : !fields["login"].match('^[A-Za-zА-Яа-яЁё]{4,60}')
            ? errors["login"]="Напишите правильный логин."
            : null;

        !fields["password"]
            ? errors["password"]="Пожалуйста, введите пароль."
            : !fields["password"].match('^[A-Za-zА-Яа-яЁё]{4,60}')
            ? errors["password"]="Пароль слишком легкий."
            : null;

        return errors
    };

    resetForm = (e) => {
        this.props.clearForm(this.fields);
        e.preventDefault()
    };


    render() {

        const {fields, errors} = this.props;
        return (
            <div>

                <div className={'container form_block'}>
                    <form className={'bg-white'} autoComplete="off"
                          id = "form1"
                          onSubmit= {this.submitUserRegistrationForm}>
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
                                value={fields.username}
                                onChange={this.handleChange}
                            />
                            <div className="text-danger ml-3 errorMsg">{errors.username}</div>

                            <FildsetLastNameComponent
                                name2='Фамилия'
                                type='text'
                                htmlFor='lastName'
                                placeholder='Фамилия'
                                value={fields.surname}
                                onChange={this.handleChange}
                            />

                            <div className="text-danger">{errors.surname}</div>

                        </div>

                        <FildsetEmailComponent
                            name2='Email'
                            type='text'
                            htmlFor='inputEmail4'
                            placeholder='Email'
                            value={fields.email}
                            onChange={this.handleChange}
                            name='email'
                        />

                        <div className="text-danger">{errors.email}</div>


                        <FildsetLoginComponent

                            name2='Логин'
                            type='text'
                            htmlFor='username'
                            placeholder='Логин'
                            value={fields.login}
                            onChange={this.handleChange}
                        />
                        <div className="text-danger">{errors.login}</div>


                        <FildsetPasswordComponent

                            name2='Пароль'
                            type='password'
                            htmlFor='inputPassword4'
                            value={fields.password}
                            onChange={this.handleChange}
                            ids='password'
                            name='password'
                        />

                        <div className="text-danger">{errors.password}</div>


                        <BtnComponent
                            btn='buttum flex'
                            nameBtn='Регистрация'
                            btnA='btn btn-primary btn-lg active form_btn bttn'
                            btnB='btn btn-secondary btn-lg active form_buttun bttn'
                            onClick={this.resetForm}


                        />


                    </form>


                </div>
                <ButtonLoginComponent
                    link='Login'
                    nameBtnRegister='Уже есть аккаунт? Вход'
                />
            </div>

        )
    }

}


const mapStateToProps = state => ({ ...state.registration });

export default connect(mapStateToProps, { setErrors, setField, setLoggedIn, clearForm })(FormRegisterComponent)
