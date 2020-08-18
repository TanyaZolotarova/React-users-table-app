export const GENERATE_DATA = '[table] generate user data in rows';
export const UPDATE_FILTERED_ROWS = '[table] update filtered rows';
export const UPDATE_PAGE = '[table] update page';

export const generateData = (data) => ({
  type: GENERATE_DATA,
  data,
});

export const updateFilteredRows = (data) => ({
  type: UPDATE_FILTERED_ROWS,
  data,
});

export const updatePage = (page) => ({
  type: UPDATE_PAGE,
  page,
});
