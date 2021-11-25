import React from 'react';
import { isEmpty } from 'lodash';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Moment from 'react-moment';

type Content = {
  committed_date: number;
  author_name: string;
  title: string;
};

interface IProps {
  commits: Content[];
}

function CommitsTabContent(props: IProps) {
  return (
    <div>
      {!isEmpty(props.commits) &&
        props.commits.map((column, i) => (
          <List className="CommitsTabContentContainer" key={i}>
            <ListItem>
              <Moment fromNow>{column.committed_date}</Moment>
            </ListItem>
            <ListItem>{column.author_name}</ListItem>
            <ListItem> {column.title}</ListItem>
          </List>
        ))}
    </div>
  );
}

export default CommitsTabContent;
