import React, { Component } from 'react';
import { connect } from 'react-redux';
import UsersTabLogic from './UsersTabLogic';
import UsersTabContent from './UsersTabContent';

type User = {
  name: string;
};

interface IProps {
  usersData: User[];
  mergeData: [];
  switchUser: number;
}

class UsersTabContentTemplate extends Component<IProps> {
  render() {
    let index = 0;

    return (
      <div className="usersTabContentMapContainer">
        {this.props.usersData?.map(() => (
          <UsersTabLogic index={index++} value={this.props.switchUser}>
            <UsersTabContent />
          </UsersTabLogic>
        ))}
      </div>
    );
  }
}
export default connect((state: IProps) => ({
  switchUser: state.switchUser,
}))(UsersTabContentTemplate);
