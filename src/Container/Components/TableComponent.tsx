import React from 'react';
import RowComponent from './RowComponent';
import PaginationComponent from "./PaginationComponent";
import {connect} from 'react-redux';
import {
    addTextInInput,
    updateFilteredRows,
    updatePage,
    addUsersData
} from "/home/tanya/PhpstormProjects/untitled8/src/Redux/actions/row";
import {NavLink} from "react-router-dom";
import {
    currentPageSelector, filterTextSelector, getPagesCount, usersPerPageSelector, usersRawSelector,
} from "/home/tanya/PhpstormProjects/untitled8/src/Redux/selectors/users.selector";
import {PlusIcon, PersonIcon} from '@primer/octicons-react';
import {ReactElement} from "react";
import {TableComponentInterface} from "../TypeScript/Interfaces/TableComponentInterface";
import {RootReducerType} from "/home/tanya/PhpstormProjects/untitled8/src/Redux/reducers/rootReducers";




const TableComponent = (props: TableComponentInterface): ReactElement => {
    const {updatePage, addTextInInput, result, pageCount, currentPage} = props;


    const setPage = (number: number): void => {
        updatePage(number);
    };

    const searchFieldChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {value: searchPhrase} = event.target;

        addTextInInput(searchPhrase);
    };
    return (
        <>
            <section className={"main-marg"}>
                <div className={"container margin_form"}>


                    <div className='flex'>
                        <input className="form-control inp-style border mb-3" id="myInput" type="text"
                               placeholder="Отфильтровать..."
                               onChange={searchFieldChanged}/>
                        <NavLink to={`/users/`} className='btn btn-dark rounded user-add-btn flex'>
                            <span><PersonIcon size={24}/></span>
                            <span>
                                <PlusIcon size={24}/>
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
                                .map((row: any, index: number) => <RowComponent key={index} row={row} index={row.idx}/>)
                        }

                        </tbody>

                    </table>

                    <nav aria-label="Page Navigation">
                        <PaginationComponent
                            setPage={setPage}
                            pagesCount={pageCount}
                            currentPage={currentPage}
                        />
                    </nav>
                </div>
            </section>
        </>
    );
}

const mapStateToProps = (state: RootReducerType) => {

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
