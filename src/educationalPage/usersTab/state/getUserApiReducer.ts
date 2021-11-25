import { GET_USERS } from './usersTabActions';

const initialState: [] = [];
interface IActions {
  type: string;
  payload: {};
}
export default function getUserApiReducer(
  state = initialState,
  action: IActions
) {
  switch (action.type) {
    case GET_USERS:
      return action.payload;
    default:
      return state;
  }
}
