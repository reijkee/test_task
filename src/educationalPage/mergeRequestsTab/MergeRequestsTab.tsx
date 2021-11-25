import React, { useState } from 'react';
import Divider from '@material-ui/core/Divider';
import '../../App.css';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { connect } from 'react-redux';
import MergeRequestsTabContent from './components/MergeRequestsTabContent';
import MergeRequestsTabPagination from './components/MergeRequestsTabPagination';

type Content = {
  author: Content;
  author_name: string;
  title: string;
  username: string;
  user_notes_count: number;
  web_url: string;
  state: string;
  merged_by: Content;
};

type State = {
  mergeRequestsData: Content[];
};

interface IState {
  mergeRequests: State;
  filterAuthors: string;
}

interface IProps {
  mergeRequestsData: Content[];
}

function MergeRequestsTab(props: IProps) {
  const [mergeRequests] = useState(props.mergeRequestsData);
  const [currentPage, setCurrentPage] = useState(1);
  const [mergeRequestsPerPage] = useState(6);

  const lastMergeRequestIndex = currentPage * mergeRequestsPerPage;
  const firstMergeRequestIndex = lastMergeRequestIndex - mergeRequestsPerPage;
  const currentMergeRequest = mergeRequests?.slice(
    firstMergeRequestIndex,
    lastMergeRequestIndex
  );

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="mergeRequestsTabContainer">
      <List className="MRTabContainer">
        <ListItem>Author</ListItem>
        <ListItem>Notes count</ListItem>
        <ListItem>Title</ListItem>
        <ListItem>Status</ListItem>
        <ListItem>Merged by</ListItem>
      </List>
      <Divider />
      <div className="mergeRequestsTabContent">
        <MergeRequestsTabContent mergeRequestsData={currentMergeRequest} />
      </div>
      <MergeRequestsTabPagination
        mergeRequestsPerPage={mergeRequestsPerPage}
        totalMergeRequests={mergeRequests?.length}
        paginate={paginate}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}

export default connect((state: IState) => ({
  mergeRequestsData: state.mergeRequests.mergeRequestsData?.filter((item) =>
    item?.author?.username?.includes(state.filterAuthors)
  ),
}))(MergeRequestsTab);
