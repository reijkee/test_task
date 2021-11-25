import axios from 'axios';
import {
  getUsersDataAction,
  addCurrentUserAction,
} from '../usersTab/state/usersTabActions';

export const getUsersData = () => {
  return async function (dispatch: Function) {
    try {
      const usersData = [];
      let page = 1;
      let onePage = [];
      let preventLoop = true;
      do {
        const users = await axios.get(
          `https://gitlab.com/api/v4/projects/${
            process.env.REACT_APP_GITLAB_REPO
          }/members?private_token=${
            process.env.REACT_APP_GITLAB_KEY
          }&per_page=100&page=${page++}`
        );
        onePage = await users.data;
        for (let i = 0; i < onePage.length; i++) {
          usersData.push(onePage[i]);
        }
        dispatch(getUsersDataAction({ usersData }));
        if (preventLoop) {
          dispatch(addCurrentUserAction(usersData[0]?.username));
          preventLoop = false;
        }
      } while (onePage.length !== [].length);
    } catch (err) {
      await console.log(err);
    }
  };
};
