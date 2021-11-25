import { SELECT_USER } from '../usersUSActions';

const initialState = null;
interface IActions {
  type: string;
  payload: {};
}
export default function selectUserUSReducer(
  state = initialState,
  action: IActions
) {
  switch (action.type) {
    case SELECT_USER:
      return action.payload;
    default:
      return state;
  }
}
