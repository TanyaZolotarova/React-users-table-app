import React from 'react';
import '../App.css';
import FildsetPasswordComponent from './Components/FildsetPasswordComponent';
import TitleTextComponent from './Components/TitleTextComponent';
import BtnComponent from './Components/BtnComponent';
import ButtonLoginComponent from './Components/ButtonLoginComponent';
import FildsetEmailComponent from './Components/FildsetEmailComponent';
import {clearForm, setErrors, setField, setLoggedIn} from "/home/tanya/PhpstormProjects/untitled8/src/Redux/actions/registration.js";
import IInputs from "./TypeScript/IInputs_interface";
import IError from './TypeScript/IError_interface';
import { connect } from 'react-redux';


class LoginFormContainer extends React.Component {


    props: any;

    fields: IInputs = {
        login: "",
        password: ""
    };

    errors: Array<IError> = [];

    componentDidMount() {
        this.props.clearForm(this.fields);
    };

    handleChange = ({target}: React.ChangeEvent<HTMLTextAreaElement>) => {
        this.props.setField(target)
    };

    submitRegistrationForm = (e:any):void => {
        e.preventDefault();

        const errors = this.validate();

        if (!errors.length) {
            let fields = {
                login: '',
                password:'',
            };
            this.props.setLoggedIn(fields);
        } else {
            this.props.setErrors(errors);
        }
    };

    getError = (name: string) => {
        const error = this.errors.find((item: IError) => item.name === name);
        return error ? error.description : '';
    };

    validate = () => {

        this.errors = [];
        const fields = this.props.fields;

        const reLogin = new RegExp("^[A-Za-zА-Яа-яЁё]{4,60}");

        if (!reLogin.exec(fields.login)){
            this.errors.push({
                name: 'login',
                description: 'Логин может быть от 4 до 60 букв. Символы и цифры запрещены.',
            });
        }

        if (fields.password.length < 6) {
            this.errors.push({
                name: 'password',
                description: 'Слишком короткий пароль. Пароль должен быть от 6 символов',
            });
        }

        return this.errors
    };



    render() {

        const {fields} = this.props;

        return (
            <div className={'container'}>

                <div className={'container form_block'}>

                    <form className={'bg-white'}
                          onSubmit={this.submitRegistrationForm}
                    >

                        <TitleTextComponent
                            text='title_block'
                            textH1='Вход'

                        />


                        <FildsetEmailComponent

                            name2='Email'
                            type='text'
                            htmlFor='inputEmail4'
                            placeholder='Email'
                            value={fields.login}
                            onChange={this.handleChange}
                            ids='email'
                            name='email'
                        />
                        <div className="text-danger">{this.getError("email")}</div>

                        <FildsetPasswordComponent

                            name2='Пароль'
                            type='password'
                            htmlFor='inputPassword4'
                            value={fields.password}
                            onChange={this.handleChange}
                            ids='password'
                            name='password'
                        />

                        <div className="text-danger">{this.getError("password")}</div>

                            <BtnComponent
                                btn='buttum flex'
                                nameBtn='Вход'
                                type1 = "submit"
                                type2 = "reset"
                                link='Home'
                                btnA='btn btn-primary btn-lg active form_btn bttn'
                                btnB='btn btn-secondary btn-lg active form_buttun bttn'
                                onSubmit= {this.submitRegistrationForm}


                            />


                    </form>

                </div>
                <ButtonLoginComponent
                    link='/'
                    type = 'btn'
                    nameBtnRegister='Нет аккаунта? Вернуться в регистрацию'
                />
            </div>

        )
    }
}




const mapStateToProps = (state: any) => ({
    ...state.registration
});

export default connect(mapStateToProps, {setErrors, setField, setLoggedIn, clearForm})
(LoginFormContainer);