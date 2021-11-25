import React, { Component } from 'react';
import { isEmpty } from 'lodash';
import '../../App.css';
import { Tabs, Tab } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import UsersTabContentTemplate from './components/UsersTabContentMap';
import { connect } from 'react-redux';
import {
  switchUserAction,
  clearUsersAction,
  addCurrentUserAction,
} from './state/usersTabActions';

type User = {
  name: string;
  username: string;
  avatar_url: string;
};

interface IProps {
  usersData: User[];
  mergeRequestsData: [];
  onUserChange: (value: number) => void;
  switchUser: number;
  clearUsers: () => void;
  addCurrentUser: (name: string) => void;
}

interface IFilterComponents {
  name: string;
}

interface IFilter {
  author: IFilterComponents;
}

interface ITotalMRMap {
  user_notes_count: number;
}
interface IState {
  switchUser: number;
  users: IProps;
  mergeRequests: IProps;
}

class UsersTab extends Component<IProps> {
  switchUser(event: {}, value: number) {
    this.props.onUserChange(value);
    this.props.clearUsers();
    this.props.addCurrentUser(this.props?.usersData[value].username);
  }

  resolveClass(value: number) {
    let className = '';
    switch (true) {
      case value <= 3:
        className = 'userStatusGood';
        break;
      case value > 3 && value <= 8:
        className = 'userStatusNormal';
        break;
      case value > 8 && value <= 15:
        className = 'userStatusNotGood';
        break;
      case value > 15:
        className = 'userStatusBad';
        break;
      default:
        break;
    }
    return className;
  }

  computeAvgNotes(name: string) {
    let num = 0;
    let avg = 0;
    const totalMRs = this.props.mergeRequestsData?.filter((item: IFilter) =>
      item?.author?.name.includes(name)
    );
    totalMRs?.map(
      (user: ITotalMRMap) =>
        (avg =
          Math.round(((num += user.user_notes_count) / totalMRs.length) * 100) /
          100)
    );
    return avg;
  }

  render() {
    const usersData = this.props.usersData;

    return (
      <div className="usersTabContainer">
        <Tabs
          value={this.props.switchUser}
          onChange={this.switchUser.bind(this)}
          className="usersTabContentContainer"
          orientation="vertical"
          variant="scrollable"
        >
          {!isEmpty(usersData) &&
            usersData.map((column) => (
              <Tab
                className="usersTabContent"
                label={column.name}
                icon={
                  <Avatar
                    className={this.resolveClass(
                      this.computeAvgNotes(column.name)
                    )}
                    variant="rounded"
                    alt="img"
                    src={column.avatar_url}
                  />
                }
              />
            ))}
        </Tabs>
        <UsersTabContentTemplate
          mergeData={this.props.mergeRequestsData}
          usersData={this.props.usersData}
        />
      </div>
    );
  }
}

export default connect(
  (state: IState) => ({
    switchUser: state.switchUser,
    usersData: state.users.usersData,
    mergeRequestsData: state.mergeRequests.mergeRequestsData,
  }),
  (dispatch) => ({
    onUserChange: (tabIndex: number) => {
      dispatch(switchUserAction(tabIndex));
    },
    clearUsers: () => {
      dispatch(clearUsersAction());
    },
    addCurrentUser: (userName: string) => {
      dispatch(addCurrentUserAction(userName));
    },
  })
)(UsersTab);
