import React, { Component } from 'react';
import '../../../App.css';
import UsersTabChart from './UsersTabChart';
import UsersTabAddTeammate from './UsersTabAddTeammate';
import UsersTabAVGs from './UsersTabAvg';

export default class UsersTabContent extends Component {
  render() {
    return (
      <div>
        <UsersTabAVGs />
        <UsersTabChart />
        <UsersTabAddTeammate />
      </div>
    );
  }
}
