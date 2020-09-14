import DefaultLayout from 'layout/default-layout';
import React from 'react';
import { Route, Switch, Redirect } from 'react-router';
import { defaultRoutes } from 'routes';

function App() {
  return (
    <React.Fragment>
      <Switch>
        <DefaultLayout>
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
        </DefaultLayout>
        <Route>
          <Redirect push to='/' />
        </Route>
      </Switch>
    </React.Fragment>
  );
}

export default App;
