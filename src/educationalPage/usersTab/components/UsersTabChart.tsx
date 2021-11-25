import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';
import { connect } from 'react-redux';

type Props = {
  author: Props;
  user_notes_count: number;
  username: string;
};

interface IProps {
  mergeRequestsData: Props[];
  usersData: [];
  activeUsers: string[];
}

interface IState {
  users: IProps;
  mergeRequests: IProps;
  addUser: [];
}

class UsersTabChart extends Component<IProps> {
  setChartData() {
    const chartData = [];

    for (let i = 0; i < this.props.mergeRequestsData?.length; i++) {
      if (
        this.props.activeUsers.includes(
          this.props.mergeRequestsData[i]?.author.username
        )
      ) {
        chartData.push(this.props.mergeRequestsData[i]?.user_notes_count);
      }
    }

    return chartData?.reverse();
  }
  render() {
    return (
      <div className="chart">
        <Line
          data={{
            labels: [
              'oldest 1',
              '2',
              '3',
              '4',
              '5',
              '6',
              '7',
              '8',
              '9',
              '10',
              '11',
              '12',
              '13',
              '14',
              '15',
              '16',
              '17',
              '18',
              '19',
              'newest 20',
            ],
            datasets: [
              {
                label: 'last 20 merge requests',
                data: this.setChartData(),
                backgroundColor: '#3f51b5',
                borderColor: 'rgba(63, 81, 181, 0.3)',
              },
            ],
          }}
          height={300}
          width={250}
          options={{ maintainAspectRatio: false }}
        />
      </div>
    );
  }
}

export default connect((state: IState) => ({
  usersData: state.users.usersData,
  mergeRequestsData: state.mergeRequests.mergeRequestsData,
  activeUsers: state.addUser,
}))(UsersTabChart);
