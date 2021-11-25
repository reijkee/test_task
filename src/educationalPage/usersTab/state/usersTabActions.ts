export const ADD_USER = 'ADD_USER';
export const REMOVE_USER = 'REMOVE_USER';
export const CLEAR_USERS = 'CLEAR_USERS';
export const ADD_CURRENT_USER = 'ADD_CURRENT_USER';
export const GET_USERS = 'GET_USERS';
export const SWITCH_USER = 'SWITCH_USER';

export const getUsersDataAction = (payload: {}) => ({
  type: GET_USERS,
  payload,
});

export const switchUserAction = (payload: number) => ({
  type: SWITCH_USER,
  payload,
});

export const addUserAction = (payload: string) => ({
  type: ADD_USER,
  payload,
});

export const removeUserAction = (payload: string) => ({
  type: REMOVE_USER,
  payload,
});

export const clearUsersAction = () => ({
  type: CLEAR_USERS,
});

export const addCurrentUserAction = (payload: string) => ({
  type: ADD_CURRENT_USER,
  payload,
});
