import { GET_COMMITS } from './commitsTabActions';

const initialState = {};
interface IActions {
  type: string;
  payload: {};
}

export default function commitsTabReducer(
  state = initialState,
  action: IActions
) {
  switch (action.type) {
    case GET_COMMITS:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}
