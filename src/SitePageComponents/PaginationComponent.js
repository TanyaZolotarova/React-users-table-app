import React from 'react';

class PaginationComponent extends React.Component {


    render() {

        const {
            setPage, pagesCount, currentPage,
        } = this.props;

        const pageNumbers = [...Array(pagesCount)].map((item, index) => index + 1);

        return (

            <ul className="pagination pg-blue justify-content-center ">
                <li className={`page-item ${pageNumbers.includes(currentPage - 1) ? '' : 'd-none'}`}>
                    <a className="page-link bg-dark text-light" onClick={() => setPage(currentPage - 1)}>Previous</a>
                </li>

                {
                    pageNumbers.map((number) => (
                        <li className={`page-item ${currentPage === number ? 'active' : ''}`} key={number}>
                            <a className="page-link" onClick={() => setPage(number)}>{number}</a>
                        </li>
                    ))
                }

                <li className={`page-item ${pageNumbers.includes(currentPage + 1) ? '' : 'd-none'}`}>
                    <a className="page-link bg-dark text-light" onClick={() => setPage(currentPage + 1)}>Next</a>
                </li>
            </ul>
        );
    }
}


export default PaginationComponent;