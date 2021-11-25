import {
  ADD_USER,
  REMOVE_USER,
  CLEAR_USERS,
  ADD_CURRENT_USER,
} from './usersTabActions';

const initialState: string[] = [];
let newState = [];

interface IActions {
  type: string;
  payload: string;
}

export default function addRemoveUserReducer(
  state = initialState,
  action: IActions
) {
  switch (action.type) {
    case ADD_USER:
      if (state.includes(action?.payload)) {
        return [...state];
      } else {
        return [...state, action.payload];
      }
    case REMOVE_USER:
      newState = [...state].filter((e) => e !== action.payload);
      return newState;
    case CLEAR_USERS:
      return [];
    case ADD_CURRENT_USER:
      if (state.includes(action?.payload)) {
        return [...state];
      } else {
        return [...state, action.payload];
      }
    default:
      return state;
  }
}
