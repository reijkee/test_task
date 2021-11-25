export const FIND_AUTHOR = 'FIND_AUTHOR';

export const filterAuthorsActions = (payload: string) => ({
  type: FIND_AUTHOR,
  payload,
});
