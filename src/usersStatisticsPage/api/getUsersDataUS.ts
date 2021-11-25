import axios from 'axios';
import { getTotalUsersPagesUS, getUsersPageUS } from '../usersUSActions';

export const getUsersData = (page: number) => {
  const index = 'x-total-pages';
  return async function (dispatch: Function) {
    try {
      const users = await axios.get(
        `https://gitlab.com/api/v4/projects/${process.env.REACT_APP_GITLAB_REPO}/members?private_token=${process.env.REACT_APP_GITLAB_KEY}&per_page=13 &page=${page}`
      );
      const usersData = await users.data;
      const totalPages: string = await users.headers[index];
      dispatch(getTotalUsersPagesUS(parseInt(totalPages)));
      dispatch(getUsersPageUS([...usersData]));
    } catch (err) {
      await console.log(err);
    }
  };
};
