import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../../../App.css';

type User = {
  username: string;
  name: string;
};
type Commit = {
  author_name: string;
};
type MRTypes = {
  username: string;
};

interface IProps {
  usersData: User[];
  mergeRequestsData: [];
  commitsData: Commit[];
  addUser: string[];
}
interface IState {
  users: IProps;
  mergeRequests: IProps;
  commits: IProps;
  addUser: string[];
}
interface IFilters {
  author: MRTypes;
}
interface IMap {
  user_notes_count: number;
}

class UsersTabAvg extends Component<IProps> {
  computeTotalUserMRs() {
    let totalMRs = 0;
    for (let i = 0; i < this.props.addUser.length; i++) {
      const oneUser = this.props.mergeRequestsData?.filter((item: IFilters) =>
        item?.author?.username?.includes(this.props.addUser[i])
      );
      totalMRs += oneUser?.length;
    }
    return totalMRs;
  }
  computeAvgNotes() {
    const totalAVGNotes = [];

    for (let i = 0; i < this.props.addUser.length; i++) {
      const oneUser = this.props.mergeRequestsData?.filter((item: IFilters) =>
        item?.author?.username?.includes(this.props.addUser[i])
      );

      let avgPerUser = 0;
      let num = 0;
      oneUser?.map(
        (user: IMap) =>
          (avgPerUser = (num += user.user_notes_count) / oneUser.length)
      );
      totalAVGNotes.push(avgPerUser);
    }

    return (
      Math.round(
        (totalAVGNotes.reduce((acc: number, val: number) => {
          return acc + val;
        }, 0) /
          totalAVGNotes.length) *
          100
      ) / 100
    );
  }
  computeTotalCommits() {
    const totalCommits = [];
    for (let i = 0; i < this.props.addUser.length; i++) {
      for (let i2 = 0; i2 < this.props?.commitsData?.length; i2++) {
        if (this.props.commitsData[i2].author_name === this.props.addUser[i]) {
          totalCommits.push(this.props.commitsData[i2]);
        }
      }
    }
    return totalCommits.length;
  }
  render() {
    return (
      <div className="usersTabAvgContainer">
        <div className="usersTabAvgItem">
          <div>merge requests made </div>
          <div>{this.computeTotalUserMRs()}</div>
        </div>
        <div className="usersTabAvgItem">
          <div>AVG comments per MR</div>
          <div>{this.computeAvgNotes()}</div>
        </div>
        <div className="usersTabAvgItem">
          <div>total commits</div>
          <div>{this.computeTotalCommits()}</div>
        </div>
      </div>
    );
  }
}

export default connect((state: IState) => ({
  usersData: state.users.usersData,
  mergeRequestsData: state.mergeRequests.mergeRequestsData,
  commitsData: state.commits.commitsData,
  addUser: state.addUser,
}))(UsersTabAvg);
