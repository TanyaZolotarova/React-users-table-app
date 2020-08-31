import React, {FormEvent, ReactNode}  from 'react';
import '../App.css';
import TitleTextComponent from './Components/TitleTextComponent';
import FildsetNameComponent from './Components/FildsetNameComponent';
import FildsetLastNameComponent from './Components/FildsetLastNameComponent';
import FildsetEmailComponent from './Components/FildsetEmailComponent';
import FildsetLoginComponent from './Components/FildsetLoginComponent';
import FildsetPasswordComponent from './Components/FildsetPasswordComponent';
import BtnComponent from './Components/BtnComponent';
import ButtonLoginComponent from './Components/ButtonLoginComponent';
import { connect } from 'react-redux';
import { setErrors, setField, setLoggedIn, clearForm } from '/home/tanya/PhpstormProjects/untitled8/src/Redux/actions/registration';
import IInputs from "./TypeScript/Interfaces/IInputs_interface";
import {RootReducerType} from "/home/tanya/PhpstormProjects/untitled8/src/Redux/reducers/rootReducers";


class FormRegisterContainer extends React.Component {


    fields: IInputs = {
        username: '',
        email: '',
        surname: '',
        login: '',
        password:'',
    };

    props:any;

    componentDidMount() {
        this.props.clearForm(this.fields);
    };

    private handleChange = ({target}: React.ChangeEvent<HTMLInputElement>) => {
        this.props.setField(target)
    };

    private submitUserRegistrationForm = (e: React.MouseEvent<HTMLButtonElement>): void => {
        e.preventDefault();
        const errors = this.validateForm();
        if (Object.keys(errors).length === 0) {
            this.props.setLoggedIn(this.fields);
        } else {
            this.props.setErrors(errors);
        }
    };

    private validateForm = () => {
        const fields = this.props.fields;
        const errors: any = {};

        /* eslint-disable @typescript-eslint/no-unused-expressions */

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

    private resetForm = (e: React.MouseEvent<HTMLElement>): void => {
        this.props.clearForm(this.fields);
        e.preventDefault()
    };

    render(): ReactNode {

        const {fields, errors} = this.props;
        return (
            <div>

                <div className={'container form_block'}>

                    <form className={'bg-white'} autoComplete="off"
                          id = "form1"
                     >

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
                                placeholder='Имя'
                                value={fields.username}
                                onChange={this.handleChange}
                                name='Name'
                            />

                            <div className="text-danger ml-3 errorMsg">{errors.username}</div>

                            <FildsetLastNameComponent
                                name2='Фамилия'
                                type='text'
                                placeholder='Фамилия'
                                value={fields.surname}
                                onChange={this.handleChange}
                                name='lastName'
                            />

                            <div className="text-danger">{errors.surname}</div>

                        </div>

                        <FildsetEmailComponent
                            name2='Email'
                            type='text'
                            placeholder='Email'
                            value={fields.email}
                            onChange={this.handleChange}
                            name='email'
                        />

                        <div className="text-danger">{errors.email}</div>


                        <FildsetLoginComponent
                            name2='Логин'
                            type='text'
                            placeholder='Логин'
                            value={fields.login}
                            onChange={this.handleChange}
                            name ='login'
                        />

                        <div className="text-danger">{errors.login}</div>


                        <FildsetPasswordComponent
                            name2='Пароль'
                            type='password'
                            value={fields.password}
                            onChange={this.handleChange}
                            name='password'
                        />

                        <div className="text-danger">{errors.password}</div>


                        <BtnComponent
                            btn='buttum flex'
                            nameBtn='Регистрация'
                            type1 = "submit"
                            type2 = "reset"
                            btnA='btn btn-primary btn-lg active form_btn bttn'
                            btnB='btn btn-secondary btn-lg active form_buttun bttn'
                            // @ts-ignore
                            onSubmit= {this.submitUserRegistrationForm}
                            onClick={this.resetForm}
                        />


                    </form>


                </div>
                <ButtonLoginComponent
                    link='Login'
                    // @ts-ignore
                    type = 'btn'
                    nameBtnRegister='Уже есть аккаунт? Вход'
                />
            </div>

        )
    }

}



const mapStateToProps = (state: RootReducerType) => (
    { ...state.registration }
);

// @ts-ignore
export default connect(mapStateToProps, { setErrors, setField, setLoggedIn, clearForm })(FormRegisterContainer);
