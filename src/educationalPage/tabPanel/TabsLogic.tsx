import React, { Component } from 'react';

interface Props {
  value: number;
  index: number;
}

class TabsLogic extends Component<Props> {
  render() {
    return (
      <div>{this.props.value === this.props.index && this.props.children}</div>
    );
  }
}

export default TabsLogic;
