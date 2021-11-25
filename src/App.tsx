import React from 'react';
import FlatStaticPage from './educationalPage/EducationalPage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import UsersFunctionalityPage from './usersStatisticsPage/USMainPage';
import LogInPage from './InitialPage/LogInPage';
import USPage from './usersStatisticsPage/contentComponents/USPage';
import { connect } from 'react-redux';

const App = (props: any) => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={LogInPage} />
          <Route path="/old" exact component={FlatStaticPage} />
          <Route path="/user-stat" exact component={UsersFunctionalityPage} />
          <Route
            path={`/user-stat/${props.selectUserUS}`}
            exact
            component={USPage}
          />
        </Switch>
      </div>
    </Router>
  );
};

export default connect((state: any) => ({
  selectUserUS: state?.selectUserUS,
}))(App);
