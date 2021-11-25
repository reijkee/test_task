import { SET_PAGE_US } from '../usersUSActions';

const initialState = 1;
interface IActions {
  type: string;
  payload: {};
}

export default function usersSetPageUSReducer(
  state = initialState,
  action: IActions
) {
  switch (action.type) {
    case SET_PAGE_US:
      return action.payload;
    default:
      return state;
  }
}
