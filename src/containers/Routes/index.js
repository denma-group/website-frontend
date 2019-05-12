// Libraries
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, withRouter } from 'react-router-dom';

// Components
import Homepage from 'containers/Homepage';

const Routes = props => {
  const { location } = props;

  /**
   * Any time the location (route) changes, an instant scroll to the top will execute.
   */
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route path="/hello-world" render={() => <div>Hello world!</div>} />
    </Switch>
  );
};

Routes.propTypes = {
  location: PropTypes.instanceOf(Object).isRequired
};


export default withRouter(Routes);
