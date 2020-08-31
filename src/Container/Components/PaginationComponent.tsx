import * as React from 'react';
import {ReactElement} from "react";
import {PaginationComponentInterface} from "../TypeScript/Interfaces/PaginationComponentInterface";

export const PaginationComponent = (props: PaginationComponentInterface): ReactElement => {
    const {setPage, pagesCount, currentPage} = props;
    const pageNumbers: Array<number> = [...Array(pagesCount)].map((item: number, index: number) => index + 1);

    return (
        <ul className="pagination pg-blue justify-content-center ">
            <li className={`page-item ${pageNumbers.includes(currentPage - 1) ? '' : 'd-none'}`}>
                <a className="page-link bg-dark text-light" onClick={() => setPage(currentPage - 1)}>{/*Previous*/}
                    <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-arrow-left"
                         fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd"
                              d="M5.854 4.646a.5.5 0 0 1 0 .708L3.207 8l2.647 2.646a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 0 1 .708 0z"/>
                        <path fillRule="evenodd"
                              d="M2.5 8a.5.5 0 0 1 .5-.5h10.5a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                    </svg>
                </a>
            </li>

            {
                pageNumbers.map((number: number) => (
                    <li className={`page-item ${currentPage === number ? 'active' : ''}`} key={number}>
                        <a className="page-link" onClick={() => setPage(number)}>{number}</a>
                    </li>
                ))
            }

            <li className={`page-item ${pageNumbers.includes(currentPage + 1) ? '' : 'd-none'}`}>
                <a className="page-link bg-dark text-light" onClick={() => setPage(currentPage + 1)}>{/*Next*/}
                    <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-arrow-right"
                         fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd"
                              d="M10.146 4.646a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L12.793 8l-2.647-2.646a.5.5 0 0 1 0-.708z"/>
                        <path fillRule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5H13a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 8z"/>
                    </svg>
                </a>
            </li>
        </ul>
    );

}

export default PaginationComponent;

// import React from 'react';
//
// const PaginationComponent: React.FC <any> = ({ setPage, pagesCount, currentPage, }) =>{
//
//     const pageNumbers: Array<number> = [...Array(pagesCount)].map((item, index: number) => index + 1);
//
//
//     return (
//         <ul className="pagination pg-blue justify-content-center ">
//             <li className={`page-item ${pageNumbers.includes(currentPage - 1) ? '' : 'd-none'}`}>
//                 <a className="page-link bg-dark text-light" onClick={() => setPage(currentPage - 1)}>Previous</a>
//             </li>
//
//             {
//                 pageNumbers.map((number: number) => (
//                     <li className={`page-item ${currentPage === number ? 'active' : ''}`} key={number}>
//                         <a className="page-link" onClick={() => setPage(number)}>{number}</a>
//                     </li>
//                 ))
//             }
//
//             <li className={`page-item ${pageNumbers.includes(currentPage + 1) ? '' : 'd-none'}`}>
//                 <a className="page-link bg-dark text-light" onClick={() => setPage(currentPage + 1)}>Next</a>
//             </li>
//         </ul>
//     );
// }
//
//
// export default PaginationComponent;
