import React from 'react';


class PaginationComponent extends React.Component {




    render() {
        const {nextPage, prevPage, setPage, pagesCount, currentPage} = this.props;

        const pageNumbers = [...Array(pagesCount)].map((item, index) => index + 1);

        return (

            <ul className="pagination pg-blue justify-content-center ">
                <li className={`page-item ${pageNumbers.includes(currentPage - 1) ? '' : 'd-none'}`}>
                    <button className="page-link active_num" onClick={() => prevPage()}>Previous</button>
                </li>

                {
                    pageNumbers.map((number) =>
                        <li className={`page-item active_num ${currentPage === number ? 'active' : ''}`}>
                            <button className="page-link " onClick={() => setPage(number)}>{number}</button>
                        </li>)
                }

                <li className={`page-item  ${pageNumbers.includes(currentPage + 1) ? '' : 'd-none'}`}>
                    <button className="page-link active_num" onClick={() => nextPage()}>Next</button>
                </li>
            </ul>
        )
    }
}

export default PaginationComponent;