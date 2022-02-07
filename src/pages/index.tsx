import React from 'react'
import { Redirect, Route, Switch, useHistory } from 'react-router-dom'
import { ListOfRoutes } from '../types/listOfRoutes'
import { EventsPage } from './events'
import { ErrorPage } from './errorPage'

const ListOfPages = () => {
  const history = useHistory()

  return (
    <Switch>
      <Route path={ListOfRoutes.events} component={EventsPage} />
      <Route exact path={ListOfRoutes.errorPage} component={ErrorPage} />
      {/* <Redirect to="/404" />*/}
    </Switch>
  )
}

export default ListOfPages
