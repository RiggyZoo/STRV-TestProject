import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { ListOfRoutes } from '../types/listOfRoutes'
import { EventsPage } from './events'
import { ErrorPage } from './errorPage'
import { EventDetailPage } from './eventDetail'

const ListOfPages = () => {
  return (
    <Switch>
      <Route exact path={ListOfRoutes.events} component={EventsPage} />
      <Route
        exact
        path={ListOfRoutes.eventDetail}
        component={EventDetailPage}
      />
      <Route exact path={ListOfRoutes.errorPage} component={ErrorPage} />
      <Redirect to="/404" />
    </Switch>
  )
}

export default ListOfPages
