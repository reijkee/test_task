import { GET_MERGE_DATA_US } from '../usersUSActions';

const initialState = null;
interface IActions {
  type: string;
  payload: {};
}

export default function usersGetMergeDataReducer(
  state = initialState,
  action: IActions
) {
  switch (action.type) {
    case GET_MERGE_DATA_US:
      return action.payload;
    default:
      return state;
  }
}
