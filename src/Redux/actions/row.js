export const GENERATE_DATA = '[table] generate user data in rows';
export const UPDATE_FILTERED_ROWS = '[table] update filtered rows';
export const UPDATE_PAGE = '[table] update page';
export const EDIT_USER_ROW = '[table] edit user row';
export const DELETE_USER_ROW = '[table] delete user row';
export const GET_TEXT = '[table-filter] add text in filter input';


export const addUsersData = (data) => {
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

export const deleteUser = (data) => {
  return {
    type: DELETE_USER_ROW,
    data
  }
};

export const addTextInInput = (text) => {
  return {
    type: GET_TEXT,
    text
  }
}