import React from 'react';
import { createUseStyles } from 'react-jss';
import USSearchBar from './USSearchBar';
import { useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import USContent from './USContent';
import { getUsersData } from './api/getUsersDataUS';
import USSwitchPageBtn from './USSwitchPageBtn';

const styles = createUseStyles({
  footer: {
    backgroundColor: '#30303010',
  },
  contentContainer: {
    backgroundColor: '#30303010',
    padding: '300px',
    paddingTop: '10px',
    height: '100vh',
  },
});

const USMainPage = (props: any) => {
  const classes = styles();

  useEffect(() => {
    props.getUserDataUS(props.currentPageUS);
  }, [props.currentPageUS]);

  return (
    <div className={classes.contentContainer}>
      <USSearchBar />
      <USContent currentUsersPageUS={props.currentUsersPageUS} />
      <footer className={classes.footer}>
        <USSwitchPageBtn />
      </footer>
    </div>
  );
};

export default connect(
  (state: any) => ({
    currentUsersPageUS: state.currentUsersPageUS,
    currentPageUS: state.currentPageUS,
  }),
  (dispatch: any) => ({
    getUserDataUS: (page: number) => {
      dispatch(getUsersData(page));
    },
  })
)(USMainPage);
