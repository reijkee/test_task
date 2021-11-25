export const GET_COMMITS = 'GET_COMMITS';

export const getCommitsDataAction = (payload: {}) => ({
  type: GET_COMMITS,
  payload,
});

export const SET_PAGE = 'SET_PAGE';

export const setPageAction = (payload: number) => ({
  type: SET_PAGE,
  payload,
});

export const GET_TOTAL_COMMIT_PAGES = 'GET_TOTAL_COMMIT_PAGES';

export const getTotalCommitPages = (payload: number) => ({
  type: GET_TOTAL_COMMIT_PAGES,
  payload,
});
