import React from 'react';
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import '../../App.css';
import { editUser} from "/home/tanya/PhpstormProjects/untitled8/src/Redux/actions/row";
import { TrashIcon } from '@primer/octicons-react';
import {usersRawSelector} from "/home/tanya/PhpstormProjects/untitled8/src/Redux/selectors/users.selector";
import {RowComponentInterface} from "../TypeScript/Interfaces/RowComponentInterface";
import { ReactElement} from "react";
import IEditInterface from "/home/tanya/PhpstormProjects/untitled8/src/Container/TypeScript/Interfaces/IEditInterface";
import {RootReducerType} from "/home/tanya/PhpstormProjects/untitled8/src/Redux/reducers/rootReducers";



const RowComponent = (props: RowComponentInterface): ReactElement => {
    const {row, index, editUser, users} = props;


    const handleDelete = (): void => {
        const rows: IEditInterface[] = [...users];
        rows.splice(index, 1);
        editUser(rows);
    };


    return (
        <tr>
            <td>{row.id}</td>
            <td>{row.login}</td>
            <td>{row.username}</td>
            <td>{row.surname}</td>
            <td>{row.email}
            </td>

            <NavLink to={`/users/${index}`} className='btn btn-sm btn-dark  rounded my-2' >
                <span className="material-icons icon-edit text-light">
                edit
                </span>
            </NavLink>

                <button onClick={() => handleDelete()}  className='btn btn-sm btn-dark rounded ml-2'>
                    {/*// onClick={console.log(this.fields.length)}>*/}
                    <span className="material-icons icon-edit text-light">
                  <TrashIcon size={18} />
                    </span>
                </button>
            </tr>
        );

}


const mapStateToProps = (state: RootReducerType) => {
    return {
        users: usersRawSelector(state),
    };
};

export default connect(mapStateToProps, { editUser })(RowComponent)




