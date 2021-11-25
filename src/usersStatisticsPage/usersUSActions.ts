export const GET_TOTAL_USERS_PAGES_US = 'GET_TOTAL_USERS_PAGES_US';

export const getTotalUsersPagesUS = (payload: number) => ({
  type: GET_TOTAL_USERS_PAGES_US,
  payload,
});

export const GET_USERS_PAGE_US = 'GET_USERS_PAGE_US';

export const getUsersPageUS = (payload: {}) => ({
  type: GET_USERS_PAGE_US,
  payload,
});

export const SET_PAGE_US = 'SET_PAGE_US';

export const setPageUS = (payload: number) => ({
  type: SET_PAGE_US,
  payload,
});

export const SELECT_USER = 'SELECT_USER';

export const selectUser = (payload: string) => ({
  type: SELECT_USER,
  payload,
});

export const GET_MERGE_DATA_US = 'GET_MERGE_DATA_US';

export const getMergeDataUS = (payload: {}) => ({
  type: GET_MERGE_DATA_US,
  payload,
});
