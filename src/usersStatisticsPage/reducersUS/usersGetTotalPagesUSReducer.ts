import { GET_TOTAL_USERS_PAGES_US } from '../usersUSActions';

const initialState = 1;
interface IActions {
  type: string;
  payload: {};
}

export default function usersGetTotalPagesUSReducer(
  state = initialState,
  action: IActions
) {
  switch (action.type) {
    case GET_TOTAL_USERS_PAGES_US:
      return action.payload;
    default:
      return state;
  }
}
