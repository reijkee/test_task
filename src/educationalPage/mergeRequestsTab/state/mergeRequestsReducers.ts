import { GET_MERGE_REQUESTS } from './mergeRequestsActions';

const initialState = {};

interface IActions {
  type: string;
  payload: {};
}

export default function mergeRequestsReducers(
  state = initialState,
  action: IActions
) {
  switch (action.type) {
    case GET_MERGE_REQUESTS:
      return action.payload;
    default:
      return state;
  }
}
