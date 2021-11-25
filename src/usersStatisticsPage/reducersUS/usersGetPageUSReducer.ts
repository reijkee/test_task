import { GET_USERS_PAGE_US } from '../usersUSActions';

const initialState = null;
interface IActions {
  type: string;
  payload: {};
}

export default function usersGetPageUSReducer(
  state = initialState,
  action: IActions
) {
  switch (action.type) {
    case GET_USERS_PAGE_US:
      return action.payload;
    default:
      return state;
  }
}
