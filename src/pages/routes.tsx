import React from 'react'
import { Switch, Route, Redirect, generatePath } from 'react-router-dom'
import { Routes as RoutesType } from '../types/pages'
import { ListOfRoutes } from '../types/listOfRoutes'
import { PrivateRoute } from '../helpers/PrivateRoute'
import ListOfPages from './index'
import { ErrorPage } from './errorPage'
import { LoginPage } from './loginPage'

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

const Routes: React.FC<RoutesType> = ({ localStoreHasJWT, authed }) => {
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
