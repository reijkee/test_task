import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

interface IProps {
  totalMergeRequests: number;
  mergeRequestsPerPage: number;
  setCurrentPage: Function;
  currentPage: number;
  paginate: Function;
}

function MergeRequestsTabPagination(props: IProps) {
  const [pageNumbers, setPageNumbers] = useState<Array<number>>([]);
  for (
    let i = 1;
    i <= Math.ceil(props.totalMergeRequests / props.mergeRequestsPerPage);
    i++
  ) {
    useEffect(() => {
      setPageNumbers((pageNumbers) => [...pageNumbers, i]);
    }, []);
  }

  const [pageNumberLimit] = useState(5);

  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);

  const handleNextBtn = () => {
    props.setCurrentPage(props.currentPage + 1);

    if (props.currentPage + 1 > maxPageNumberLimit) {
      setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };
  const handlePrevBtn = () => {
    props.setCurrentPage(props.currentPage - 1);

    if ((props.currentPage - 1) % pageNumberLimit === 0) {
      setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };
  return (
    <div>
      <ul className="mergeRequestsTabPaginationUl">
        <li>
          <Button onClick={handlePrevBtn} disabled={props.currentPage === 1}>
            <ArrowBackIosNewIcon />
          </Button>
        </li>
        {pageNumbers?.map((number) => {
          if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
            return (
              <li
                id={number.toString()}
                key={number}
                className={props.currentPage === number ? 'active' : undefined}
              >
                <Button
                  className="mergeRequestsTabPaginationButton"
                  variant="contained"
                  size="small"
                  onClick={() => props.paginate(number)}
                >
                  {number}
                </Button>
              </li>
            );
          } else {
            return null;
          }
        })}
        <li>
          <Button
            onClick={handleNextBtn}
            disabled={props.currentPage === pageNumbers.length}
          >
            <ArrowForwardIosIcon />
          </Button>
        </li>
      </ul>
    </div>
  );
}

export default MergeRequestsTabPagination;
