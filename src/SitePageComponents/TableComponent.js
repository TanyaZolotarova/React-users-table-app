import React from 'react';
import RowComponent from './RowComponent';
import PaginationComponent from "./PaginationComponent";
import '../App.css';


class TableComponent extends React.Component {
    state = {
        inputFilter: '',
        currentPage: 1,
        rowsPerPage: 15,
    };

    render () {
        const {rows} = this.props;

        const {inputFilter, currentPage, rowsPerPage} = this.state;

        const filterColumn = (column) => {
            return column.toString().toLowerCase().includes(inputFilter.toLowerCase());
        };

        const searchFilter = (row) => {
            return Object.values(row).filter(filterColumn).length;
        };

        const filteredRows = rows.filter(searchFilter);

        const pagesCount = Math.ceil(filteredRows.length / rowsPerPage);

        const searchFieldChanged = (event) => {
            const {value} = event.target;
            this.setState({inputFilter: value, currentPage: 1});
        };

        const indexOfLastRow = currentPage * rowsPerPage;
        const indexOfFirstRow = indexOfLastRow - rowsPerPage;

        const nextPage = () => this.setState({ currentPage: currentPage + 1 });
        const prevPage = () => this.setState({ currentPage: currentPage - 1 });
        const setPage = (number) => this.setState({ currentPage: number });

        return (

            <section className={"main-marg "}>
                <div className={"container margin_form "}>
                    <input type="text" id="myInput"  placeholder="Search" onKeyUp={searchFieldChanged} className={"inp-style"}
                           title="Type in a name"/>
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
                            filteredRows
                                .slice(indexOfFirstRow, indexOfLastRow)
                                .map((row) => <RowComponent key={row.uniqueId} row={row} />)
                        }
                        </tbody>
                    </table>
                </div>
                <nav aria-label="Page Navigation" >
                    <PaginationComponent
                        prevPage={prevPage}
                        nextPage={nextPage}
                        setPage={setPage}
                        pagesCount={pagesCount}
                        currentPage={currentPage}
                    />
                </nav>

            </section>









        );
    }
}

export default TableComponent;