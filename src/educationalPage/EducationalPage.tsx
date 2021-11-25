import React, { Component } from 'react';
import '../App.css';
import { Tabs, Tab, AppBar, Container } from '@material-ui/core';
import { connect } from 'react-redux';
import { getCommitsData } from './api/getCommitsData';
import { getUsersData } from './api/getUsersData';
import { getMergeRequestsData } from './api/getMergeRequestsData';
import TabsLogic from './tabPanel/TabsLogic';
import CommitsTab from './commitsTab/CommitsTab';
import UserStatTab from './usersTab/UsersTab';
import MergeRequestsTab from './mergeRequestsTab/MergeRequestsTab';
import { tabAction } from './tabPanel/tabLogicState/tabLogicActions';
import SearchBar from './tabPanel/SearchBar';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

interface IState {
  filterAuthors: string;
  tab: number;
  switchUser: number;
  currentCommitsPage: number;
}

interface IProps {
  onGetData: (m: number) => void;
  onTabChange: (value: number) => void;
  tab: number;
  currentCommitsPage: number;
}

class EducationalPage extends Component<IProps> {
  componentDidMount() {
    const m = this.props.currentCommitsPage;
    this.props.onGetData(m);
  }

  switchingTabs(event: {}, value: number) {
    this.props.onTabChange(value);
  }

  componentDidUpdate(prevProps: Readonly<IProps>) {
    if (prevProps.currentCommitsPage !== this.props.currentCommitsPage) {
      const m = this.props.currentCommitsPage;
      this.props.onGetData(m);
    }
  }
  render() {
    return (
      <div className="App">
        <Container>
          <AppBar className="bar" position="static">
            <div className="appTabPanel">
              <SearchBar />
              <Tabs
                value={this.props.tab}
                onChange={this.switchingTabs.bind(this)}
              >
                <Tab label="User statistics" />
                <Tab label="Last Merge requests" />
                <Tab label="Last Commits" />
              </Tabs>
              <div className="LogInButton">
                <Link to="/">
                  <Button>return homepage</Button>
                </Link>
              </div>
            </div>
          </AppBar>
          <TabsLogic value={this.props.tab} index={0}>
            <UserStatTab />
          </TabsLogic>
          <TabsLogic value={this.props.tab} index={1}>
            <MergeRequestsTab />
          </TabsLogic>
          <TabsLogic value={this.props.tab} index={2}>
            <CommitsTab />
          </TabsLogic>
        </Container>
      </div>
    );
  }
}

export default connect(
  (state: IState) => ({
    filterAuthors: state?.filterAuthors,
    tab: state.tab,
    switchUser: state.switchUser,
    state: state,
    currentCommitsPage: state.currentCommitsPage,
  }),
  (dispatch: Function) => ({
    onTabChange: (tabIndex: number) => {
      dispatch(tabAction(tabIndex));
    },
    onGetData: (currentPage: number) => {
      dispatch(getCommitsData(currentPage));
      dispatch(getUsersData());
      dispatch(getMergeRequestsData());
    },
  })
)(EducationalPage);
