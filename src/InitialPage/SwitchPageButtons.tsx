import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import { createUseStyles } from 'react-jss';

const styles = createUseStyles({
  switchPageButtonsBorder: {
    display: 'flex',
    flexDirection: 'column',
  },
  link: {
    textDecoration: 'none !important',
    margin: '5px',
  },
  newBtn: {
    width: '32px !important',
    height: '48px !important',
  },
  oldBtn: {
    width: '32px !important',
    height: '48px !important',
  },
});

const SwitchPageButtons = () => {
  const classes = styles();
  return (
    <div className={classes.switchPageButtonsBorder}>
      <Link to="/old" className={classes.link}>
        <Button variant="outlined" className={classes.oldBtn}>
          old ver.
        </Button>
      </Link>
    </div>
  );
};

export default SwitchPageButtons;
