import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import Auth from './Auth';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      localStorage.getItem('jwtToken') === null ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: '/login',
            state: { from: props.location }
          }}
        />
      )
    }
  />
);

export default PrivateRoute;
