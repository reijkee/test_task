import React, { useState, useEffect } from 'react';
import Divider from '@material-ui/core/Divider';
import '../../App.css';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { connect } from 'react-redux';
import CommitsTabContent from './components/CommitsTabContent';
import CommitsTabPagination from './components/CommitsTabPagination';

type Content = {
  committed_date: number;
  author_name: string;
  title: string;
};

interface IProps {
  commitsData: Content[];
  currentCommitsPage: number;
}
interface IState {
  commits: IProps;
  filterAuthors: string;
  currentCommitsPage: number;
}
function CommitsTab(props: IProps) {
  const [commits, setCommits] = useState(props.commitsData);

  const [currentPage, setCurrentPage] = useState(1);
  const [commitsPerPage] = useState(10);

  const lastCommitIndex = commitsPerPage;
  const firstCommitIndex = 0;
  const currentCommit = commits?.slice(firstCommitIndex, lastCommitIndex);

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };
  useEffect(() => {
    setCommits(props.commitsData);
  });
  return (
    <div>
      <List className="CommitsTabContainer">
        <ListItem> Date</ListItem>
        <ListItem>Author</ListItem>
        <ListItem>Commit Message</ListItem>
      </List>
      <Divider />
      <div className="CommitsTabContent">
        <CommitsTabContent commits={currentCommit} />
        <CommitsTabPagination
          commitsPerPage={commitsPerPage}
          totalCommits={commits?.length}
          paginate={paginate}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
}

export default connect((state: IState) => ({
  commitsData: state.commits?.commitsData?.filter((item) =>
    item.author_name.includes(state.filterAuthors)
  ),
  currentCommitsPage: state.currentCommitsPage,
}))(CommitsTab);
