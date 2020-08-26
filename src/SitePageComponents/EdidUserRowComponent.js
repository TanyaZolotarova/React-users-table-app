import React , { useEffect, useState} from 'react';
import '../App.css';
import { connect } from 'react-redux';
import {addUsersData, editUser} from '/home/tanya/PhpstormProjects/untitled8/src/Redux/actions/row.js';
import {generateId} from "/home/tanya/PhpstormProjects/untitled8/src/SitePageComponents/RandomFunctions.js";
import {usersRawSelector} from "/home/tanya/PhpstormProjects/untitled8/src/Redux/selectors/users.selector.js";




    const EditUserRowComponent = ({users, match, editUser}) => {

        const [row, setRow] = useState({
            id: '',
            name1: '',
            name2: '',
            name3: '',
            email: '',
        });

        const [rowId, setRowId] = useState( null);

        const [errors, setErrors] = useState('');

        useEffect(() => {

            const fields = users;
            const {id} = match.params;


            if (id) {
                setRow( fields[id] );
                setRowId(parseInt(id));
            }

        }, []);


        const handleChange = (event) => {
            const {target} = event;
            setRow( {...row, [target.name]: target.value}
            )
        };


        const handleSave = () => {

            const errors = validate();

            if (Object.keys(errors).length === 0) {

                if (rowId === null) {
                    row.id = generateId();
                }

                const oldRows = users;
                const newRows = rowId === null
                    ? [row, ...oldRows] // when adding a new user
                    : oldRows.map((oldRow, index) => index === rowId ? row : oldRow); // when editing existing user

                editUser(newRows);
                window.history.back();
            }  else {
                setErrors( errors );
            }} ;

        const validate = () => {
            let rows = row;
            let errors = {};

            const editNames = new RegExp("^[A-Za-zА-Яа-яЁё]{4,60}");
            const editEmail = new RegExp('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')

            if (!editNames.exec(rows.name1)){
                errors.name1 = "Введите правильный логин.";
            }

            if (!editNames.exec(rows.name2)) {
                errors.name2 = "Введите правильное имя.";
            }

            if (!editNames.exec(rows.name3)) {
                errors.name3 = "Введите правильную фамилию.";
            }

            if (!editEmail.exec(rows.email)) {
                errors.email = "Введите правильный e-mail.";
            }

            return errors
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
                                        onChange={handleChange}
                                        value={row[name]}
                                    />
                                </td>)}
                        </fieldset>
                        <div className="text-danger">{errors.name1}</div>

                        <fieldset className="fieldset border border-input-users">
                            <legend className="label_text_user ml-2">Имя</legend>
                            {['name2'].map((name) =>
                                <td key={name}>
                                    <input
                                        className="form-control form-control_user registrationField-input input_border form_input bg-dark "
                                        name={name}
                                        onChange={handleChange}
                                        value={row[name]}
                                    />
                                </td>)}
                        </fieldset>
                        <div className="text-danger">{errors.name2}</div>

                        <fieldset className="fieldset border border-input-users">
                            <legend className="label_text_user ml-2">Фамилия</legend>
                            {['name3'].map((name) =>
                                <td key={name}>
                                    <input
                                        className="form-control form-control_user registrationField-input input_border form_input bg-dark "
                                        name={name}
                                        onChange={handleChange}
                                        value={row[name]}
                                    />
                                </td>)}

                        </fieldset>
                        <div className="text-danger">{errors.name3}</div>

                        <fieldset className="fieldset border border-input-users">
                            <legend className="label_text_user ml-2">E-mail</legend>
                            {['email'].map((name) =>
                                <td key={name}>
                                    <input
                                        className="form-control form-control_user registrationField-input input_border form_input bg-dark "
                                        name={name}
                                        onChange={handleChange}
                                        value={row[name]}
                                    />
                                </td>)}
                        </fieldset>
                        <div className="text-danger">{errors.email}</div>

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


const mapStateToProps = state => {
    return {
        users: usersRawSelector(state),
    };
};

export default connect(mapStateToProps, { addUsersData, editUser })(EditUserRowComponent)

