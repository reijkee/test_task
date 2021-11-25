import { GET_TOTAL_COMMIT_PAGES } from './commitsTabActions';

const initialState = 100;

interface IAction {
  type: string;
  payload: number;
}

export default function commitsTabTotalPagesReducer(
  state: number = initialState,
  action: IAction
) {
  switch (action?.type) {
    case GET_TOTAL_COMMIT_PAGES:
      return action?.payload;
    default:
      return state;
  }
}
