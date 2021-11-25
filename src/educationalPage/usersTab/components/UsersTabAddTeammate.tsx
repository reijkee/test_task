import React, { Component } from 'react';
import AddTeammateContent from './AddTeammateContent';
import ArrowBackIosNewTwoToneIcon from '@mui/icons-material/ArrowBackIosNewTwoTone';
import ArrowForwardIosTwoToneIcon from '@mui/icons-material/ArrowForwardIosTwoTone';

class UsersTabAddTeammate extends Component {
  render() {
    return (
      <div className="usersTabAddTeammateContainer">
        <div>Select teammates:</div>
        <div className="usersTabAddTeammateContent">
          <div className="usersTabAddTeammateArrow">
            <ArrowBackIosNewTwoToneIcon />
          </div>
          <AddTeammateContent />
          <div className="usersTabAddTeammateArrow">
            <ArrowForwardIosTwoToneIcon />
          </div>
        </div>
      </div>
    );
  }
}

export default UsersTabAddTeammate;
