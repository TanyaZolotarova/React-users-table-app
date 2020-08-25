import React from 'react';
import RowComponent from '/home/tanya/PhpstormProjects/untitled8/src/SitePageComponents/RowComponent.js';
import PaginationComponent from "/home/tanya/PhpstormProjects/untitled8/src/SitePageComponents/PaginationComponent.js";
import {connect} from 'react-redux';
import {addTextInInput, updateFilteredRows, updatePage, addUsersData} from "/home/tanya/PhpstormProjects/untitled8/src/Redux/actions/row.js";
import {NavLink} from "react-router-dom";
import {PlusIcon, PersonIcon} from '@primer/octicons-react';
import {
    currentPageSelector,
    filterTextSelector,
    getPagesCount,
    usersPerPageSelector,
    usersRawSelector,
} from '../Redux/selectors/users.selector';

class TableComponent extends React.Component {


    setPage = (number) => {
        this.props.updatePage(number);
    };

    searchFieldChanged = (event) => {
        const {value: searchPhrase} = event.target;
        this.props.addTextInInput(searchPhrase);
    };



    render() {

        const {result} =this.props;

        return (

                <section className={"main-marg"}>
                    <div className={"container margin_form"}>

                        <div className='flex'>
                <input className="form-control inp-style border mb-3" id="myInput" type="text" placeholder="Отфильтровать..."
                       onKeyUp={this.searchFieldChanged} />
                       <NavLink to={`/users/`} className='btn btn-dark rounded user-add-btn flex' >
                           <span><PersonIcon size={24} /></span>
                           <span>
                               <PlusIcon size={24} />
                                </span>
                            </NavLink>
                        </div>


                <table className="table table-bordered table-dark table-hover shadow" id='table1'>
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

                    {
                        Object.values(result)
                            .map((row, index) => <RowComponent key={index} row={row} index={index} />)
                    }
                    </tbody>

                </table>

                <nav aria-label="Page Navigation" >
                    <PaginationComponent
                        setPage={this.setPage}
                        pagesCount={this.props.pageCount}
                        currentPage={this.props.currentPage}
                    />
                </nav>
                    </div>
                </section>

        );
    }
}


const mapStateToProps = state => {

    return {
        users: usersRawSelector(state),
        filter: filterTextSelector(state),
        result: usersPerPageSelector(state),
        pageCount: getPagesCount(state),
        currentPage: currentPageSelector(state),
    };
};

export default connect(
    mapStateToProps, { updateFilteredRows, updatePage, addUsersData, addTextInInput, }
)(TableComponent);
