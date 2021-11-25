import { SET_PAGE } from './commitsTabActions';

interface IAction {
  type: string;
  payload: number;
}

const initialState = 1;

export function currentPageCommitsReducers(
  state = initialState,
  action: IAction
) {
  switch (action.type) {
    case SET_PAGE:
      return action.payload;
    default:
      return state;
  }
}
