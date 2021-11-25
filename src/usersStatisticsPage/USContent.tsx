import React, { useEffect } from 'react';
import Avatar from '@material-ui/core/Avatar';
import { createUseStyles } from 'react-jss';
import Divider from '@material-ui/core/Divider';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { selectUser } from './usersUSActions';
import { getUsersData } from './api/getUsersDataUS';

const styles = createUseStyles({
  divRow: {
    display: 'flex',
    marginLeft: '80px',
  },
  avatar: {
    border: '#00000060 0.5px solid',
    borderRadius: '100px !important',
  },
  name: {
    fontSize: '0.875rem',
    fontWeight: '600',
  },
  namesContainer: {
    width: '350px',
    marginLeft: '10px',
  },
  nameAndAvatarContainer: {
    width: '350px',
    display: 'flex',
    margin: '10px 16px',
  },
  otherInfoContainer: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
  },
  otherInfoItem: {
    width: '150px',
    margin: '10px 16px',
  },
  linkUnderline: {
    textDecoration: 'none !important',
    color: 'black',
  },
});

const USContent = (props: any) => {
  const classes = styles();

  useEffect(() => {
    props.getMergeDataUS(props.selectUserUS);
  }, [props.selectUserUS]);

  return (
    <div>
      {props.currentUsersPageUS?.map((column: any) => (
        <Link to={`/user-stat/${column.id}`} className={classes.linkUnderline}>
          <div
            onClick={() => {
              props.selectUser(column.id);
            }}
          >
            <div className={classes.divRow}>
              <div className={classes.nameAndAvatarContainer}>
                <Avatar
                  variant="rounded"
                  alt="img"
                  src={column.avatar_url}
                  className={classes.avatar}
                />
                <div className={classes.namesContainer}>
                  <div className={classes.name}> {column.name}</div>
                  <div>{`@${column.username}`}</div>
                </div>
              </div>
              <div className={classes.otherInfoContainer}>
                <div className={classes.otherInfoItem}> {column.state}</div>
                <div className={classes.otherInfoItem}>some text</div>
                <div className={classes.otherInfoItem}>some text2</div>
                <div className={classes.otherInfoItem}>some text3</div>
              </div>
            </div>
            <Divider />
          </div>
        </Link>
      ))}
    </div>
  );
};

export default connect(
  (state: any) => ({
    selectUserUS: state.selectUserUS,
  }),
  (dispatch: Function) => ({
    selectUser: (username: string) => {
      dispatch(selectUser(username));
    },
    getMergeDataUS: (userId: number) => {
      dispatch(getUsersData(userId));
    },
  })
)(USContent);
