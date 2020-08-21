import React from 'react';
import '../App.css';
import { connect } from 'react-redux';
import { editUser, generateData } from '/home/tanya/PhpstormProjects/untitled8/src/Redux/actions/row.js';
import {generateId} from "/home/tanya/PhpstormProjects/untitled8/src/SitePageComponents/RandomFunctions.js";



class EditUserRowContainer extends React.Component {
    state = {
        row: {
            id: '',
            name1: '',
            name2: '',
            name3: '',
            email: '',
        },
        rowId: null,
    }

    componentDidMount() {
        const fields = this.props.generateUserRow;
        const {id} = this.props.match.params;

        if (id) {
            this.setState({row: fields[id], rowId: parseInt(id)});
        }
    }


    handleChange = (event) => {
        const {target} = event;

        this.setState({
            row: {
                ...this.state.row,
                [target.name]: target.value,
            }
        });
    };

    handleSave() {
        const {row, rowId} = this.state;

        if (rowId === null) {
            row.id = generateId();
        }

        const oldRows = this.props.generateUserRow;
        const newRows = rowId === null
            ? [row, ...oldRows] // when adding a new user
            : oldRows.map((oldRow, index) => index === rowId ? row : oldRow); // when editing existing user

        this.props.editUser(newRows);
        window.history.back();
    };



    render() {
        return (
            <div className='fon_page'>
                <div className={'container form_block'}>
                    <h2 className={"user-title"}> Редактирование данных пользователя </h2>
                    <form className={"bg-dark"} onSubmit={this.submitEdit}>

                        <div className={"id-user"}>
                        <label className="user-h2"> <strong> ID </strong>
                            <span className="pt-3">
                                {
                                    this.state.row.id
                                    // !this.state.row.id ? generateId() : this.state.row.id
                                }
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
                                        onChange={this.handleChange}
                                        value={this.state.row[name]}
                                    />
                                </td>)}
                        </fieldset>

                        <fieldset className="fieldset border border-input-users">
                            <legend className="label_text_user ml-2">Имя</legend>
                            {['name2'].map((name) =>
                                <td key={name}>
                                    <input
                                        className="form-control form-control_user registrationField-input input_border form_input bg-dark "
                                        name={name}
                                        onChange={this.handleChange}
                                        value={this.state.row[name]}
                                    />
                                </td>)}
                        </fieldset>

                        <fieldset className="fieldset border border-input-users">
                            <legend className="label_text_user ml-2">Фамилия</legend>
                            {['name3'].map((name) =>
                                <td key={name}>
                                    <input
                                        className="form-control form-control_user registrationField-input input_border form_input bg-dark "
                                        name={name}
                                        onChange={this.handleChange}
                                        value={this.state.row[name]}
                                    />
                                </td>)}

                        </fieldset>

                        <fieldset className="fieldset border border-input-users">
                            <legend className="label_text_user ml-2">E-mail</legend>
                            {['email'].map((name) =>
                                <td key={name}>
                                    <input
                                        className="form-control form-control_user registrationField-input input_border form_input bg-dark "
                                        name={name}
                                        onChange={this.handleChange}
                                        value={this.state.row[name]}
                                    />
                                </td>)}
                        </fieldset>


                    </form>
                </div>
                <div className='d-flex justify-content-center mt-5'>
                    <button
                        className='btn btn-dark mr-5 '
                        type='button'
                        onClick={() => this.handleSave()}>
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
    };
}

const mapStateToProps = state => {
    return {...state.rows};
};

export default connect(mapStateToProps, {editUser, generateData})(EditUserRowContainer)

