import axios from 'axios';
import { getMergeRequestsDataAction } from '../mergeRequestsTab/state/mergeRequestsActions';

export const getMergeRequestsData = () => {
  return async function (dispatch: Function) {
    try {
      let page = 1;
      const mergeRequestsData = [];
      let onePage = [];
      do {
        const mergeRequests = await axios.get(
          `https://gitlab.com/api/v4/projects/${
            process.env.REACT_APP_GITLAB_REPO
          }/merge_requests?private_token=${
            process.env.REACT_APP_GITLAB_KEY
          }&per_page=100&page=${page++}`
        );
        onePage = await mergeRequests.data;
        for (let i = 0; i < onePage.length; i++) {
          mergeRequestsData.push(onePage[i]);
        }
        dispatch(getMergeRequestsDataAction({ mergeRequestsData }));
      } while (onePage.length !== [].length);
    } catch (err) {
      await console.log(err);
    }
  };
};
