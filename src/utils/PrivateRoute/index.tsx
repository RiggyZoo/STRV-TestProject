import React from 'react'
import { Route, Redirect } from 'react-router-dom'

interface PrivateRouteProps {
  component: React.ElementType
  localStoreHasJWT: boolean
  authed: boolean
}

export const PrivateRoute: React.FC<PrivateRouteProps> = ({
  component: Component,
  authed,
  localStoreHasJWT,
}) => {
  console.log(localStoreHasJWT, 'storage from privater route')
  console.log(authed, 'authed from privater route')
  return (
    <Route
      render={(props) =>
        localStoreHasJWT ? (
          authed ? (
            <Component {...props} />
          ) : (
            <span>Loading...</span>
          )
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: props.location.pathname },
            }}
          />
        )
      }
    />
  )
}
