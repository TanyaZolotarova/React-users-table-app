import {combineReducers} from "redux";
import {EDIT_USER_ROW, GENERATE_DATA, UPDATE_FILTERED_ROWS, UPDATE_PAGE, DELETE_USER_ROW, GET_TEXT} from "../actions/row";


const rows = (state = [], action) => {
  switch (action.type) {
    case GENERATE_DATA:
      return [...action.data || []];
    case EDIT_USER_ROW:
      return [...action.data || []];
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
      // case EDIT_USER_ROW:
      // // case DELETE_USER_ROW:
      //     return [...action.data];
    default:
      return state;
  }
};

const filterText = (state = '', action)=>{
  switch (action.type) {
    case GET_TEXT:
      return action.text;
    default:
      return state;
  }
};


export const usersReducer = combineReducers({
  rows,
  page,
  filterText
});