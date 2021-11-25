import React, { ChangeEvent } from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { connect } from 'react-redux';
import { addUserAction, removeUserAction } from '../state/usersTabActions';

type User = {
  username: string;
  name: string;
};

interface IProps {
  usersData: User[];
  onAddUser: (user: string) => void;
  onRemoveUser: (user: string) => void;
  switchUser: number;
}

interface IState {
  users: IProps;
  switchUser: number;
}

function AddTeammateContent(props: IProps) {
  function addRemoveUser(e: ChangeEvent<HTMLInputElement>, user: string) {
    if (e.target.checked) {
      props.onAddUser(user);
    } else {
      props.onRemoveUser(user);
    }
  }
  function disableCurrentUserCheckbox(iDiv: number) {
    return props.switchUser + 1 === iDiv;
  }
  let iVal = 0;
  let iDiv = 0;

  return (
    <div className="AddTeammateContentContainer">
      {props.usersData?.map((u) => (
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                color="primary"
                value={props.usersData[iVal++]?.username}
                onChange={(e) => addRemoveUser(e, u.username)}
              />
            }
            label={props.usersData[iDiv++]?.name}
            disabled={disableCurrentUserCheckbox(iDiv)}
          />
        </FormGroup>
      ))}
    </div>
  );
}

export default connect(
  (state: IState) => ({
    usersData: state.users.usersData,
    switchUser: state.switchUser,
  }),

  (dispatch) => ({
    onAddUser: (userName: string) => {
      dispatch(addUserAction(userName));
    },
    onRemoveUser: (userName: string) => {
      dispatch(removeUserAction(userName));
    },
  })
)(AddTeammateContent);
