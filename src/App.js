import React from 'react';
import { Route, Switch, Redirect } from 'react-router';
import { defaultRoutes } from 'routes';

function App() {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path="/">
          <Redirect push from='/' to='/list' />
        </Route>
        {
          defaultRoutes.map(route => (
            <Route
              key={route.key}
              exact={route.exact}
              path={route.path}
              render={routeProps => (
                <route.component {...routeProps} />
              )}
            />
          ))
        }
      </Switch>
    </React.Fragment>
  );
}

export default App;
