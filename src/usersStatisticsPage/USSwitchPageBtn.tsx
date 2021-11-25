import React from 'react';
import { createUseStyles } from 'react-jss';
import { connect } from 'react-redux';
import { setPageUS } from './usersUSActions';

const styles = createUseStyles({
  paginationContainer: {
    marginLeft: '80px',
    display: 'flex',
    height: '60px',
  },
  pageBtn: {
    width: '25px',
    height: '30px',
    textAlign: 'center',
    marginTop: '6px',
    padding: '5px',
    cursor: 'pointer',
    '&:hover': {
      border: 'black solid 1px',
    },
  },

  pageGap: {
    marginTop: '6px',
    height: '30px',
    padding: '5px',
    cursor: 'default',
  },
  pageNextPerv: {
    '&:hover': {
      border: 'black solid 1px',
    },
    height: '30px',
    marginTop: '6px',
    padding: '5px',
    cursor: 'pointer',
  },
  pageLastFirst: {
    '&:hover': {
      border: 'black solid 1px',
    },
    height: '30px',
    marginTop: '6px',
    padding: '5px',
    cursor: 'pointer',
  },
  btnDisplayNone: {
    display: 'none',
  },
});

const USSwitchPageBtn = (props: any) => {
  const classes = styles();

  const setPageFirst = () => {
    props.setPageUS(1);
  };

  const setPagePerv = () => {
    props.setPageUS(props.currentPageUS - 1);
  };

  const setPageNext = () => {
    props.setPageUS(props.currentPageUS + 1);
  };

  const setPageLast = () => {
    props.setPageUS(props.totalUsersPagesUS);
  };

  function displayLogicFirstPerv() {
    if (props.currentPageUS === 1) {
      return classes.btnDisplayNone;
    }
  }

  function displayLogicLastNext() {
    if (props.currentPageUS === props.totalUsersPagesUS) {
      return classes.btnDisplayNone;
    }
  }

  return (
    <div className={classes.paginationContainer}>
      <div
        className={[classes.pageLastFirst, displayLogicFirstPerv()].join(' ')}
        onClick={setPageFirst}
      >
        {'« First'}
      </div>
      <div
        className={[classes.pageNextPerv, displayLogicFirstPerv()].join(' ')}
        onClick={setPagePerv}
      >
        {'‹ Prev '}
      </div>
      <div className={classes.pageBtn}>1</div>
      <div className={classes.pageBtn}>2</div>
      <div className={classes.pageBtn}>3</div>
      <div className={classes.pageBtn}>4</div>
      <div className={classes.pageBtn}>5</div>
      <div className={classes.pageGap}>...</div>
      <div
        className={[classes.pageNextPerv, displayLogicLastNext()].join(' ')}
        onClick={setPageNext}
      >
        {'Next ›'}
      </div>
      <div
        className={[classes.pageLastFirst, displayLogicLastNext()].join(' ')}
        onClick={setPageLast}
      >
        {'Last »'}
      </div>
    </div>
  );
};

export default connect(
  (state: any) => ({
    totalUsersPagesUS: state?.totalUsersPagesUS,
    currentPageUS: state?.currentPageUS,
  }),
  (dispatch: Function) => ({
    setPageUS: (page: number) => {
      dispatch(setPageUS(page));
    },
  })
)(USSwitchPageBtn);
