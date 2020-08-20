import React from 'react';
import RowComponent from '/home/tanya/PhpstormProjects/untitled8/src/SitePageComponents/RowComponent.js';
import PaginationComponent from "/home/tanya/PhpstormProjects/untitled8/src/SitePageComponents/PaginationComponent.js";
import {connect} from 'react-redux';
import {generateData, updateFilteredRows, updatePage} from "/home/tanya/PhpstormProjects/untitled8/src/Redux/actions/row.js";
import {NavLink} from "react-router-dom";
import {PlusIcon} from '@primer/octicons-react';

class TableComponent extends React.Component {

    rowsPerPage = 10;

    componentDidMount() {
        this.props.updateFilteredRows(this.props.data);
    }

    filterColumn = (inputFilter, column) => {
        return column
            .toString()
            .toLowerCase()
            .includes(inputFilter.toLowerCase());
    };


    setPage = (number) => {
        this.props.updatePage(number);
    };

    getPagesCount = () => {
        return Math.ceil(this.props.updatedData.length / this.rowsPerPage);
    };

    searchFieldChanged = (event) => {
        const {value: searchPhrase} = event.target;

        const rowsFiltered = this.props.data.filter((row) => {
            return Object.values(row)
                .filter((column) => this.filterColumn(searchPhrase, column)).length;
        });

        this.props.updateFilteredRows(rowsFiltered);
    };

    indexOfLastRow = () => {
        return this.props.page * this.rowsPerPage;
    };

    indexOfFirstRow = () => {
        return (this.props.page * this.rowsPerPage) - this.rowsPerPage;
    };

    render() {
        return (

                <section className={"main-marg"}>
                    <div className={"container margin_form"}>

                        <div className='flex'>
                <input className="form-control inp-style border mb-3" id="myInput" type="text" placeholder="Отфильтровать..."
                       onKeyUp={this.searchFieldChanged} />
                       <NavLink to={`/users/`} className='btn btn-dark rounded user-add-btn' >
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
                        this.props.updatedData ?
                            this.props.updatedData
                                .slice(this.indexOfFirstRow(), this.indexOfLastRow())
                                .map((row, index) => <RowComponent key={index} row={row} index={index}  />) : []
                    }
                    </tbody>

                </table>

                <nav aria-label="Page Navigation" >
                    <PaginationComponent
                        setPage={this.setPage}
                        pagesCount={this.getPagesCount()}
                        currentPage={this.props.page}
                    />
                </nav>
                    </div>
                </section>

        );
    }
}

const mapStateToProps = state => {
    return { ...state.rows };
};
export default connect(
    mapStateToProps, { updateFilteredRows, updatePage, generateData }
)(TableComponent);
