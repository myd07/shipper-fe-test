import DefaultLayout from 'layout/default-layout';
import React from 'react';
import { Route, Switch, Redirect } from 'react-router';
import { defaultRoutes } from 'routes';

function App() {
  return (
    <React.Fragment>
      <DefaultLayout>
        <Switch>
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
        <Route>
          <Redirect push to='/' />
        </Route>
        </Switch>
      </DefaultLayout>
    </React.Fragment>
  );
}

export default App;
