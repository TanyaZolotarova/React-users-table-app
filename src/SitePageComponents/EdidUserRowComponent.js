import React from 'react';
import {connect} from "react-redux";
import {generateData} from "/home/tanya/PhpstormProjects/untitled8/src/Redux/actions/row.js";


class EditUserRowContainer extends React.Component {

    state = {
        row: {},
    }

    componentDidMount() {
        const {id} = this.props.match.params;
        const fields = this.props.generateUserRow;

        this.setState({row: fields[id]});
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
    //TODO: action for changing store
    handleSave() {
        return undefined;
    }

    render() {
        return (
            <div className='fon_page'>
                <form className="container-sm mt-5 bg-dark" onSubmit= {this.submitEdit}>
                    <table className="table table-hover" id='table-edit'>
                        <thead className="thead-dark ">
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Логин</th>
                            <th scope="col">Имя</th>
                            <th scope="col">Фамилия</th>
                            <th scope="col">E-mail</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td className={"textarea_users"}>
                                {this.state.row.id}
                            </td>
                            {['name1', 'name2', 'name3', 'email'].map((name) =>
                                <td key={name}>
                                    <input className={"bg-dark textarea_users border-input-users"} type={"text"} name={name} onChange={this.handleChange}
                                           value={this.state.row[name]} />
                                </td>
                            )}
                        </tr>
                        </tbody>
                    </table>
                </form>

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
                        Отменить изменения
                    </button>

                </div>

            </div>
        )
    };
}

const mapStateToProps = state => {
    return { ...state.rows };
};

export default connect(mapStateToProps, { generateData })(EditUserRowContainer)