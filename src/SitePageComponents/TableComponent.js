import React from 'react';
import RowComponent from './RowComponent';
import PaginationComponent from "./PaginationComponent";
import '../App.css';


class TableComponent extends React.Component {

    state = {
        currentPage: 1,
        rowsPerPage: 15,
        rowsFiltered: [...this.props.rows],
    };

    filterColumn = (inputFilter, column) => {
        return column
            .toString()
            .toLowerCase()
            .includes(inputFilter.toLowerCase());
    };

    nextPage = () => {
        const currentPage = this.state.currentPage;
        return this.setState({ currentPage: currentPage + 1 });
    };

    prevPage = () => {
        const currentPage = this.state.currentPage;
        return this.setState({ currentPage: currentPage - 1 });
    };

    setPage = (number) => {
        return this.setState({ currentPage: number });
    };

    getPagesCount = () => {
        return Math.ceil(this.state.rowsFiltered.length / this.state.rowsPerPage);
    };

    searchFieldChanged = (event) => {
        const {value: searchPhrase} = event.target;

        const rowsFiltered = this.props.rows.filter((row) => {
            return Object.values(row)
                .filter((column) => this.filterColumn(searchPhrase, column)).length;
        });

        return this.setState({currentPage: 1, rowsFiltered: rowsFiltered});
    };

    indexOfLastRow = () => {
        return this.state.currentPage * this.state.rowsPerPage;
    };

    indexOfFirstRow = () => {
        return (this.state.currentPage * this.state.rowsPerPage) - this.state.rowsPerPage;
    };

    render () {

        return (

            <section className={"main-marg "}>
                <div className={"container margin_form "}>
                    <input type="text" id="myInput"  placeholder="Search" onKeyUp={this.searchFieldChanged}
                           className={"inp-style"} title="Type in a name"/>
                    <table className="table table-bordered table-dark table-hover shadow" id={"table1"}>
                        <thead>
                        <tr>
                            <th scope="col">#id</th>
                            <th scope="col">Login</th>
                            <th scope="col">Имя</th>
                            <th scope="col">Фамилия</th>
                            <th scope="col">Email</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.rowsFiltered
                                .slice(this.indexOfFirstRow(), this.indexOfLastRow())
                                .map((row) => <RowComponent key={row.uniqueId} row={row} />)
                        }
                        </tbody>
                    </table>
                </div>
                <nav aria-label="Page Navigation" >
                    <PaginationComponent
                        prevPage={this.prevPage}
                        nextPage={this.nextPage}
                        setPage={this.setPage}
                        pagesCount={this.getPagesCount()}
                        currentPage={this.state.currentPage}
                    />
                </nav>

            </section>









        );
    }
}

export default TableComponent;