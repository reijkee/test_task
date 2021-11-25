import React from 'react';
import { isEmpty } from 'lodash';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

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

interface IProps {
  mergeRequestsData: Content[];
}

function MergeRequestsTabContent(props: IProps) {
  const resolveClass = (value: number) => {
    let className = '';
    switch (true) {
      case value <= 3:
        className = 'userStatusGoodFill';
        break;
      case value > 3 && value <= 8:
        className = 'userStatusNormalFill';
        break;
      case value > 8 && value <= 15:
        className = 'userStatusNotGoodFill';
        break;
      case value > 15:
        className = 'userStatusBadFill';
        break;
      default:
        break;
    }
    return className;
  };

  const LIWithNameStyle: {} = {
    textDecoration: 'underline',
    cursor: 'pointer',
  };

  function hyperRef(e: React.MouseEvent<HTMLLIElement, MouseEvent>) {
    window.open((e.target as Element).id);
  }
  return (
    <div>
      {!isEmpty(props.mergeRequestsData) &&
        props.mergeRequestsData.map((column) => (
          <List className="MRTabContentContainer">
            <ListItem>{column.author?.username}</ListItem>
            <ListItem className={resolveClass(column.user_notes_count)}>
              {column.user_notes_count}
            </ListItem>
            <ListItem
              style={LIWithNameStyle}
              id={column.web_url}
              onClick={(e) => {
                hyperRef(e);
              }}
            >
              {column.title}
            </ListItem>
            <ListItem>{column.state}</ListItem>
            <ListItem>{column.merged_by?.username}</ListItem>
          </List>
        ))}
    </div>
  );
}

export default MergeRequestsTabContent;
