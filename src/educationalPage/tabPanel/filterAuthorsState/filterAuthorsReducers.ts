import { FIND_AUTHOR } from './filterAuthorsActions';

const initialState = '';
interface IActions {
  type: string;
  payload: string;
}

export default function filterAuthorsReducers(
  state = initialState,
  action: IActions
) {
  switch (action.type) {
    case FIND_AUTHOR:
      return action.payload;
    default:
      return state;
  }
}
