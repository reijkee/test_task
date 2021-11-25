import React from 'react';
import SwitchPageButtons from './SwitchPageButtons';
import TextField from '@mui/material/TextField';
import { createUseStyles } from 'react-jss';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const styles = createUseStyles({
  loginContainer: {
    display: 'flex',
    border: '2px solid #3f51b5',
    marginTop: '30px',
    marginLeft: '30px',
    padding: '15px',
    borderRadius: '10px',
    width: '300px',
  },
  loginFormContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  loginFormItem: {
    marginTop: '10px !important',
    boxSizing: 'content-box',
    minWidth: '192px !important',
  },
  loginFormItemHeader: {
    fontSize: '19px',
    fontWeight: '490',
  },
  btn: {
    paddingTop: '153px',
  },
  link: {
    textDecoration: 'none !important',
  },
});

const LogInPage = () => {
  const classes = styles();
  return (
    <div className={classes.loginContainer}>
      <div className={classes.loginFormContainer}>
        <div className={(classes.loginFormItem, classes.loginFormItemHeader)}>
          Login:
        </div>
        <TextField
          label="personal key"
          variant="filled"
          className={classes.loginFormItem}
        />
        <TextField
          label="repository id"
          variant="filled"
          className={classes.loginFormItem}
        />
        <Link to="/user-stat" className={classes.link}>
          <Button variant="contained" className={classes.loginFormItem}>
            Log In
          </Button>
        </Link>
      </div>
      <div className={classes.btn}>
        <SwitchPageButtons />
      </div>
    </div>
  );
};

export default LogInPage;
