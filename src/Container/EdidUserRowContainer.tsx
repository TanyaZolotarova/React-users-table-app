import React, { useEffect, useState} from 'react';
import '../App.css';
import { connect } from 'react-redux';
import {addUsersData, editUser} from '/home/tanya/PhpstormProjects/untitled8/src/Redux/actions/row.js';
import {generateId} from "/home/tanya/PhpstormProjects/untitled8/src/Functions/RandomFunctions";
import {usersRawSelector} from "/home/tanya/PhpstormProjects/untitled8/src/Redux/selectors/users.selector.js";
import IInputs from "./TypeScript/IInputs_interface";
import IError from "../Container/TypeScript/IError_interface";




const EditUserRowContainer: React.FC <any> = ({users, match, editUser, props}) => {

    const [row, setRow] = useState <IInputs> (
        {
            id: '',
            login: '',
            username: '',
            surname: '',
            email: '',
        }
    );

    const [rowId, setRowId] = useState <null | number> ( null);

    const [errors, setErrors] = useState <IError[]> ([]);

    const getError = (name: string) => {
        const error = errors.find((item: IError) => item.name === name);
        return error ? error.description : '';
    };

    useEffect(() => {

        const fields = users;
        const {id} = match.params;


        if (id) {
            setRow( fields[id] );
            setRowId(parseInt(id));
        }

    }, []);


    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        const {target} = event;
        setRow( {...row, [target.name]: target.value}
        )
    };


    const handleSave = () => {

        const errors = validate();

        if (!errors.length) {

            if (rowId === null) {
                row.id = generateId();
            }

            const oldRows = users;
            const newRows = rowId === null
                ? [row, ...oldRows] // when adding a new user
                : oldRows.map((oldRow: IInputs, index: number) => index === rowId ? row : oldRow); // when editing existing user

            editUser(newRows);
            window.history.back();
        }  else {
            setErrors( errors );
        }} ;

    const validate = () => {
        const errors = [];

        const editNames = new RegExp("^[A-Za-zА-Яа-яЁё]{2,60}");
        const editEmail = new RegExp('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')

        if (!editNames.exec(row.login!)) {
            errors.push({
                name: 'login',
                description: 'Введите правильный логин.',
            });
        }

        if (!editNames.exec(row.username!)) {
            errors.push({
                name: 'username',
                description: 'Введите правильное имя.',
            });
        }

        if (!editNames.exec(row.surname!)) {
            errors.push({
                name: 'surname',
                description: 'Введите правильную фамилию.',
            });
        }

        if (!editEmail.exec(row.email!)) {
            errors.push({
                name: 'email',
                description: 'Введите правильный e-mail.',
            });
        }

        return errors;
    };

        return (
            <div className='fon_page'>
                <div className={'container form_block'}>
                    <h2 className={"user-title"}> Редактирование данных пользователя </h2>
                    <form className={"bg-dark"} >

                        <div className={"id-user"}>
                        <label className="user-h2"> <strong> ID </strong>
                            <span className="pt-3">
                                {row.id}
                            </span>
                        </label>
                        </div>
                            {/*  === EDIT_FORM ===  */}

                        <fieldset className="fieldset border border-input-users">
                            <legend className="label_text_user ml-2">Логин</legend>
                            {['name1'].map((name) =>
                                <td key={name} className={"registrationField-input"}>
                                    <input
                                        className="form-control form-control_user registrationField-input input_border form_input bg-dark "
                                        name={name}
                                        onChange={props.handleChange}
                                        value={row.login}
                                    />
                                </td>)}
                        </fieldset>
                        <div className="text-danger">{getError('login')}</div>

                        <fieldset className="fieldset border border-input-users">
                            <legend className="label_text_user ml-2">Имя</legend>
                            {['name2'].map((name) =>
                                <td key={name}>
                                    <input
                                        className="form-control form-control_user registrationField-input input_border form_input bg-dark "
                                        name={name}
                                        onChange={props.handleChange}
                                        value={row.username}
                                    />
                                </td>)}
                        </fieldset>
                        <div className="text-danger">{getError('username')}</div>

                        <fieldset className="fieldset border border-input-users">
                            <legend className="label_text_user ml-2">Фамилия</legend>
                            {['name3'].map((name) =>
                                <td key={name}>
                                    <input
                                        className="form-control form-control_user registrationField-input input_border form_input bg-dark "
                                        name={name}
                                        onChange={props.handleChange}
                                        value={row.surname}
                                    />
                                </td>)}

                        </fieldset>
                        <div className="text-danger">{getError('surname')}</div>

                        <fieldset className="fieldset border border-input-users">
                            <legend className="label_text_user ml-2">E-mail</legend>
                            {['email'].map((name) =>
                                <td key={name}>
                                    <input
                                        className="form-control form-control_user registrationField-input input_border form_input bg-dark "
                                        name={name}
                                        onChange={props.handleChange}
                                        value={row.email} />

                                </td>)}
                        </fieldset>
                        <div className="text-danger">{getError('email')}</div>

                    </form>
                </div>
                <div className='d-flex justify-content-center mt-5'>
                    <button
                        className='btn btn-dark mr-5 '
                        type='button'
                        onClick={() => handleSave()}>
                       Сохранить
                    </button>

                    <button
                        className='btn btn-secondary ml-5 '
                        type='button'
                        onClick={() => window.history.back()}
                    >
                        Назад
                    </button>

                </div>

            </div>
        )

}


const mapStateToProps = (state: any) => {
    return {
        users: usersRawSelector(state),
    };
};

export default connect(mapStateToProps, { addUsersData, editUser })(EditUserRowContainer)

