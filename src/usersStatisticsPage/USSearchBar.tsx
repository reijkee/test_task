import React from 'react';
import { createUseStyles } from 'react-jss';
import USRouterBtn from './USRouterBtn';

const styles = createUseStyles({
  container: {
    backgroundColor: '#30303010 ',
    display: 'flex',
    height: '64px',
    padding: '8px',
    alignItems: 'center',
  },
  filter: {
    width: '135px',
    height: '32px',
    margin: '8px',
    border: '1px solid black',
    borderRadius: '5px',
  },
  input: {
    width: '1000px',
    height: '32px',
    margin: '8px',
    borderRadius: '5px',
    border: '1px solid black',
  },
  btn: {
    textAlign: 'left',
  },
  inputAndFilterContainer: {
    display: 'flex',
  },
});

const USSearchBar = () => {
  const classes = styles();
  return (
    <div className={classes.container}>
      <div className={classes.btn}>
        <USRouterBtn />
      </div>
      <div className={classes.inputAndFilterContainer}>
        <input className={classes.input} />
        <div className={classes.filter} />
      </div>
      <div />
    </div>
  );
};

export default USSearchBar;
