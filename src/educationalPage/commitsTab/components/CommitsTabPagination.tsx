import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { connect } from 'react-redux';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { setPageAction } from '../state/commitsTabActions';

interface IProps {
  commitsPerPage: number;
  totalCommits: number;
  paginate: Function;
  commitsData: [];
  currentPage: number;
  setCurrentPage: Function;
  nextPage: (value: number) => void;
  commitsTabTotalPages: number;
  currentCommitsPage: number;
}
interface IState {
  commits: IProps;
  currentCommitsPage: number;
  commitsTabTotalPages: number;
}
function CommitsTabPagination(props: IProps) {
  const [pageNumberLimit] = useState(5);
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);

  const handleNextBtn = () => {
    props.setCurrentPage(props.currentPage + 1);
    props.nextPage(props.currentCommitsPage + 1);
  };
  const handlePrevBtn = () => {
    props.setCurrentPage(props.currentPage - 1);
    props.nextPage(props.currentCommitsPage - 1);
    if ((props.currentPage - 1) % pageNumberLimit === 0) {
      setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };
  const setPageFromButton = () => {
    props.nextPage(props.commitsTabTotalPages);
  };
  const setPageFromButtonPlus2 = () => {
    props.nextPage(props.currentCommitsPage + 2);
  };
  const setPageFromButtonPlus1 = () => {
    props.nextPage(props.currentCommitsPage + 1);
  };
  return (
    <div className="CommitsTabPaginationContainer">
      <ul className="CommitsTabPaginationUl">
        <li className="CommitsTabPaginationArrow">
          <Button
            onClick={handlePrevBtn}
            disabled={props.currentCommitsPage === 1}
          >
            <ArrowBackIosNewIcon />
          </Button>
        </li>
        <li>
          <Button variant="outlined">{props.currentCommitsPage}</Button>
        </li>
        <li>
          <Button
            onClick={setPageFromButtonPlus1}
            disabled={props.currentCommitsPage + 1 > props.commitsTabTotalPages}
          >
            {props.currentCommitsPage + 1}
          </Button>
        </li>
        <li>
          <Button
            onClick={setPageFromButtonPlus2}
            disabled={props.currentCommitsPage + 2 > props.commitsTabTotalPages}
          >
            {props.currentCommitsPage + 2}
          </Button>
        </li>
        <li>. . .</li>
        <li>
          <Button onClick={setPageFromButton}>
            {props.commitsTabTotalPages}
          </Button>
        </li>
        <li className="CommitsTabPaginationArrow">
          <Button
            onClick={handleNextBtn}
            disabled={props.currentCommitsPage === props.commitsTabTotalPages}
          >
            <ArrowForwardIosIcon />
          </Button>
        </li>
      </ul>
    </div>
  );
}

export default connect(
  (state: IState) => ({
    commitsData: state.commits?.commitsData,
    commitsTabTotalPages: state.commitsTabTotalPages,
    currentCommitsPage: state.currentCommitsPage,
  }),
  (dispatch: Function) => ({
    nextPage: (pageNumber: number) => {
      dispatch(setPageAction(pageNumber));
    },
  })
)(CommitsTabPagination);
