import React from 'react';
import '../App.css';
import {connect} from "react-redux";
import {editUser, generateData} from "/home/tanya/PhpstormProjects/untitled8/src/Redux/actions/row.js";



class EditUserRowContainer extends React.Component {

    state = {
        row: {},
        rowId: null,
    }

    componentDidMount() {

        const fields = this.props.generateUserRow;
        const {id} = this.props.match.params;

        this.setState({row: fields[id], rowId: id});


    }
    handleChange = (event) => {
        const {target} = event;

        this.setState({
            row: {
                ...this.state.row,
                [target.name]: target.value,
            }
        });
    }

    handleSave() {
        const {row, rowId} = this.state;

        const result = this.props.generateUserRow;
        result[rowId] = row;

        this.props.editUser(result);
        window.history.back();
    };

    render() {
        return (
            <div className='fon_page'>
                <div className={'container form_block'}>
                    <form className={"bg-dark"} onSubmit={this.submitEdit}>


                            <h2 className="user-h2">Редактирование данных пользователя </h2>


                            {/*  === EDIT_FORM ===  */}

                        <fieldset className="fieldset border border-input-users">
                            <legend className="label_text_user ml-2">Логин</legend>
                            {['name1'].map((name) =>
                                <td key={name}>
                                    <input
                                        className="form-control form-control_user input_border form_input bg-dark "
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
                                        className="form-control form-control_user input_border form_input bg-dark "
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
                                        className="form-control form-control_user input_border form_input bg-dark "
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
                                        className="form-control form-control_user input_border form_input bg-dark "
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
                        className='btn btn-success mr-5 bttn'
                        type='button'
                        onClick={() => this.handleSave()}>
                        Сохранить изменения
                    </button>

                    <button
                        className='btn btn-danger ml-5 bttn'
                        type='button'
                        onClick={() => window.history.back()}
                    >
                        Вернуться назад
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

