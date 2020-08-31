import { createSelector } from 'reselect';
import {RootReducerType} from "/home/tanya/PhpstormProjects/untitled8/src/Redux/reducers/rootReducers";

export const rowsPerPage = 10;

export const usersBaseSelector = (state: RootReducerType) => state.users;

export const usersRawSelector = createSelector(
    usersBaseSelector,
    (state)=> state.rows
);

export const filterTextSelector = createSelector(
    usersBaseSelector,
    (state)=> state.filterText
);

export const pageSelector = createSelector(
    usersBaseSelector,
    (state) => state.page
);


export const usersSelector = createSelector(
    [usersRawSelector, filterTextSelector],
    (items, text) => {
        const filterColumn = (searchPhrase: string, column: string) => {
            return column
                .toString()
                .toLowerCase()
                .includes(searchPhrase.toLowerCase());
        };

        return (items || []).filter((row)=>{
            return Object.values(row)
                .filter((column) => filterColumn(text, column)).length;
        });
    }
);

export const getPagesCount = createSelector (
    [usersSelector],
    (items: Array<object>) => {
        return Math.ceil(items.length / rowsPerPage);
    }
);

export const currentPageSelector = createSelector(
    [getPagesCount, pageSelector],
    (count, page) => {
        if(page > count) {
            return 1
        }
        return page;
    }
);

export const indexOfLastRow = createSelector(currentPageSelector, (page) => {
    return page * rowsPerPage;
});

export const indexOfFirstRow = createSelector(currentPageSelector,  (page) => {
    return (page * rowsPerPage) - rowsPerPage;
});


export const usersPerPageSelector = createSelector(
    [usersSelector,indexOfLastRow, indexOfFirstRow],
    (items, last, first) => {
        return (items || []).slice(first, last);
    }
);





// import { createSelector } from 'reselect';
//
// export const rowsPerPage = 10;
//
// export const usersBaseSelector = (state) => state.users;
//
// export const usersRawSelector = createSelector(
//     usersBaseSelector,
//     (state)=> state.rows
// );
//
// export const filterTextSelector = createSelector(
//     usersBaseSelector,
//     (state)=> state.filterText
// );
//
// export const pageSelector = createSelector(
//     usersBaseSelector,
//     (state) => state.page
// );
//
//
// export const usersSelector = createSelector(
//     [usersRawSelector, filterTextSelector],
//     (items, text) => {
//         const filterColumn = (searchPhrase, column) => {
//             return column
//                 .toString()
//                 .toLowerCase()
//                 .includes(searchPhrase.toLowerCase());
//         };
//
//         return (items || []).filter((row)=>{
//             return Object.values(row)
//                 .filter((column) => filterColumn(text, column)).length;
//         });
//     }
// );
//
// export const getPagesCount = createSelector (
//     [usersSelector],
//     (items) => {
//         return Math.ceil(items.length / rowsPerPage);
//     }
// );
//
// export const currentPageSelector = createSelector(
//     [getPagesCount, pageSelector],
//     (count, page) => {
//         if(page > count) {
//             return 1
//         }
//         return page;
//     }
// );
//
// export const indexOfLastRow = createSelector(currentPageSelector, (page) => {
//     return page * rowsPerPage;
// });
//
// export const indexOfFirstRow = createSelector(currentPageSelector,  (page) => {
//     return (page * rowsPerPage) - rowsPerPage;
// });
//
//
// export const usersPerPageSelector = createSelector(
//     [usersSelector,indexOfLastRow, indexOfFirstRow],
//     (items, last, first) => {
//         return (items || []).slice(first, last);
//     }
// );
