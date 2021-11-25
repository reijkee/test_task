import React, { Component } from 'react';

interface Props {
  value: number;
  index: number;
}

export default class UsersTabLogic extends Component<Props> {
  render() {
    return (
      <div>{this.props.value === this.props.index && this.props.children}</div>
    );
  }
}
