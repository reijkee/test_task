import axios from 'axios';
import { getMergeDataUS } from '../usersUSActions';

export const getUsersData = (id: number) => {
  return async function (dispatch: Function) {
    try {
      const merge = await axios.get(
        `https://gitlab.com/api/v4/projects/${process.env.REACT_APP_GITLAB_REPO}/merge_requests?author_id=${id}&per_page=100`
      );
      const mergeData = await merge.data;
      dispatch(getMergeDataUS([...mergeData]));
    } catch (err) {
      await console.log(err);
    }
  };
};
