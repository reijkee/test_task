export const GET_MERGE_REQUESTS = 'GET_MERGE_REQUESTS';
export const getMergeRequestsDataAction = (payload: {}) => ({
  type: GET_MERGE_REQUESTS,
  payload,
});
