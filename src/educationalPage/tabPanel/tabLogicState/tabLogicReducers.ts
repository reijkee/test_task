import { SWITCH_TAB } from './tabLogicActions';

const initialState = 0;
interface IActions {
  type: string;
  payload: number;
}

export default function tabLogicReducers(
  state = initialState,
  action: IActions
) {
  switch (action.type) {
    case SWITCH_TAB:
      return action.payload;
    default:
      return state;
  }
}
