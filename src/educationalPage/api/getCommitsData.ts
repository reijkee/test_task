import axios from 'axios';
import {
  getCommitsDataAction,
  getTotalCommitPages,
} from '../commitsTab/state/commitsTabActions';

export function getCommitsData(currentPage: number) {
  const index = 'x-per-page';
  return async function (dispatch: Function) {
    try {
      const commits = await axios.get(
        `https://gitlab.com/api/v4/projects/${process.env.REACT_APP_GITLAB_REPO}/repository/commits/?private_token=${process.env.REACT_APP_GITLAB_KEY}&per_page=10&page=${currentPage}`
      );
      const commitsData = await commits.data;
      const totalPages: string = await commits.headers[index];
      dispatch(getTotalCommitPages(parseInt(totalPages)));
      dispatch(getCommitsDataAction({ commitsData }));
    } catch (err) {
      await console.log(err);
    }
  };
}
