import { SWITCH_USER } from './usersTabActions';

const initialState = 0;
interface IActions {
  type: string;
  payload: number;
}

export default function switchUserReducer(
  state = initialState,
  action: IActions
) {
  switch (action.type) {
    case SWITCH_USER:
      return action.payload;
    default:
      return state;
  }
}
