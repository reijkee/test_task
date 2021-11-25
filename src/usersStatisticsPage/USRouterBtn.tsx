import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import { createUseStyles } from 'react-jss';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

const styles = createUseStyles({
  linkUnderline: {
    textDecoration: 'none !important',
  },
  border: {
    marginLeft: '15px',
  },
});

const USRouterBtn = () => {
  const classes = styles();
  return (
    <div className={classes.border}>
      <Link className={classes.linkUnderline} to="/">
        <Button>
          <ArrowBackIosNewIcon />
        </Button>
      </Link>
    </div>
  );
};

export default USRouterBtn;
