import { combineReducers } from 'redux';
import { GENERATE_DATA, UPDATE_FILTERED_ROWS, UPDATE_PAGE } from '../actions/row';

// const initialState = {
//     rowsInitial: [],
//     rowsFiltered: [],
//     currentPage: 1,
// };
//
// export const userRowsReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case GENERATE_DATA:
//             return { ...state, rowsInitial: [...action.data], rowsFiltered: [...action.data] };
//         case UPDATE_FILTERED_ROWS:
//             return { ...state, rowsFiltered: [...action.data] };
//         case UPDATE_PAGE:
//             return { ...state, currentPage: action.page };
//         default:
//             return state;
//     }
// };

// const data = (state = [], action) => {
//     switch (action.type) {
//         case GENERATE_DATA:
//             return [...action.data];
//         default:
//             return state;
//     }
// };

const updatedData = (state = [], action) => {
  switch (action.type) {
    case UPDATE_FILTERED_ROWS:
      return [...action.data];
    default:
      return state;
  }
};

const page = (state = 1, action) => {
  switch (action.type) {
    case UPDATE_PAGE:
      return action.page;
    case UPDATE_FILTERED_ROWS:
      return 1;
    default:
      return state;
  }
};

export const userRowsReducer = combineReducers({
  updatedData,
  page,
});
