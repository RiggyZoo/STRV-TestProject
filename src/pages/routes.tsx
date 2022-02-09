import React, { useEffect } from 'react'
import {
  Switch,
  Route,
  Redirect,
  useRouteMatch,
  useHistory,
  generatePath,
  useLocation,
} from 'react-router-dom'
import { ListOfRoutes } from '../types/listOfRoutes'
import { EventsPage } from './events'
import LoginPage from '../containers/LoginPage'
import { PrivateRoute } from '../utils/PrivateRoute'
import ListOfPages from './index'
import { ErrorPage } from './errorPage'

interface Routes {
  localStoreHasJWT: boolean
  authed: boolean
}

type PagesConfig = {
  list: {
    defaultRoute: ListOfRoutes
    pages: React.ElementType
  }
}

const pagesConfig: PagesConfig = {
  list: {
    defaultRoute: ListOfRoutes.events,
    pages: ListOfPages,
  },
}

const Routes: React.FC<Routes> = ({ localStoreHasJWT, authed }) => {
  return (
    <Switch>
      {localStoreHasJWT ? (
        authed ? (
          <Route
            exact
            path="/"
            render={() => (
              <Redirect
                to={generatePath(ListOfRoutes.events, {
                  filter: 'all',
                })}
              />
            )}
          />
        ) : (
          <span>Loading...</span>
        )
      ) : (
        <Route exact path="/" render={() => <LoginPage />} />
      )}
      <PrivateRoute
        component={pagesConfig.list.pages}
        localStoreHasJWT={localStoreHasJWT}
        authed={authed}
      />

      <Route exact path="/*" render={() => <ErrorPage />} />
    </Switch>
  )
}

export default Routes
