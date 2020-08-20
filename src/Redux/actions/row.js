export const GENERATE_DATA = '[table] generate user data in rows';
export const UPDATE_FILTERED_ROWS = '[table] update filtered rows';
export const UPDATE_PAGE = '[table] update page';
export const EDIT_USER_ROW = '[table] edit user row';



export const generateData = (data) => {
  return {
    type: GENERATE_DATA,
    data
  }
};

export const updateFilteredRows = (data) => {
  return {
    type: UPDATE_FILTERED_ROWS,
    data
  }
};

export const updatePage = (page) => {
  return {
    type: UPDATE_PAGE,
    page
  }
};

export const editUser = (rows) => {
  return {
    type: EDIT_USER_ROW,
    data: rows
  }
}