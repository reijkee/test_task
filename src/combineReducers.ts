import { combineReducers } from 'redux';

import tabLogicReducers from './educationalPage/tabPanel/tabLogicState/tabLogicReducers';
import commitsTabReducer from './educationalPage/commitsTab/state/commitsTabReducer';
import filterAuthorsReducers from './educationalPage/tabPanel/filterAuthorsState/filterAuthorsReducers';
import getUserApiReducer from './educationalPage/usersTab/state/getUserApiReducer';
import mergeRequestsReducers from './educationalPage/mergeRequestsTab/state/mergeRequestsReducers';
import switchUserReducer from './educationalPage/usersTab/state/switchUserReducer';
import addRemoveUserReducer from './educationalPage/usersTab/state/addRemoveUserReducer';
import { currentPageCommitsReducers } from './educationalPage/commitsTab/state/currentPageReducer';
import commitsTabTotalPagesReducer from './educationalPage/commitsTab/state/commitsTabTotalPagesReducer';
import usersGetPageUSReducer from './usersStatisticsPage/reducersUS/usersGetPageUSReducer';
import usersGetTotalPagesUSReducer from './usersStatisticsPage/reducersUS/usersGetTotalPagesUSReducer';
import usersSetPageUSReducer from './usersStatisticsPage/reducersUS/usersSetPageUSReducer';
import selectUserUSReducer from './usersStatisticsPage/reducersUS/selectUserUSReducer';
import usersGetMergeDataReducer from './usersStatisticsPage/reducersUS/usersGetMergeDataReducer';

export default combineReducers({
  tab: tabLogicReducers,
  commits: commitsTabReducer,
  users: getUserApiReducer,
  filterAuthors: filterAuthorsReducers,
  mergeRequests: mergeRequestsReducers,
  switchUser: switchUserReducer,
  addUser: addRemoveUserReducer,
  currentCommitsPage: currentPageCommitsReducers,
  commitsTabTotalPages: commitsTabTotalPagesReducer,
  currentUsersPageUS: usersGetPageUSReducer,
  totalUsersPagesUS: usersGetTotalPagesUSReducer,
  currentPageUS: usersSetPageUSReducer,
  selectUserUS: selectUserUSReducer,
  mergeDataUs: usersGetMergeDataReducer,
});
