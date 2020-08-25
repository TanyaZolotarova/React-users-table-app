// import React from 'react';
// import '../App.css';
// import { NavLink } from 'react-router-dom';
//
//
// class RowComponent extends React.Component {
//   render() {
//       const { row, index } = this.props;
//
//     return (
//       <tr>
//         <td>{row.id}</td>
//         <td>{row.name1}</td>
//         <td>{row.name2}</td>
//         <td>{row.name3}</td>
//         <td> { row.email }</td>
//         <td>
//             <NavLink to={`/users/${index}`} className="btn btn-dark rounded ">
//               <span>
//                 edit
//               </span>
//             </NavLink>
//         </td>
//
//       </tr>
//     );
//   }
// }
//
// export default RowComponent;



import React from 'react';
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import '../App.css';
import {deleteUser, editUser} from "/home/tanya/PhpstormProjects/untitled8/src/Redux/actions/row.js";
import { TrashIcon } from '@primer/octicons-react';


class RowComponent extends React.Component {

    // componentDidMount() {
    //     const fields = this.props.generateUserRow;
    //
    // }


    handleDelete = () => {
        const rows = this.props.rows;
        rows.splice(this.props.index, 1);
        this.props.editUser(rows);
    };

    render() {
        const { row, index } = this.props;

        return (
            <tr>
                <td>{row.id}</td>
                <td>{row.name1}</td>
                <td>{row.name2}</td>
                <td>{row.name3}</td>
                <td>{row.email}
                </td>

                <NavLink to={`/users/${index}`} className='btn btn-sm btn-dark  rounded my-2' >
                <span className="material-icons icon-edit text-light">
                edit
                </span>
                </NavLink>

                <button onClick={this.handleDelete}  className='btn btn-sm btn-dark rounded ml-2'>
                    {/*// onClick={console.log(this.fields.length)}>*/}
                    <span className="material-icons icon-edit text-light">
                  <TrashIcon size={18} />
                    </span>
                </button>
            </tr>
        );
    }
}

const mapStateToProps = state => {
    return {
        ...state.users,
    };
};

export default connect(mapStateToProps, {deleteUser, editUser})(RowComponent)






