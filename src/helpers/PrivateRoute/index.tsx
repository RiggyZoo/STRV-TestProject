import React from 'react'
import { Route, Redirect, RouteComponentProps } from 'react-router-dom'

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
  return (
    <Route
      render={(props: RouteComponentProps<any>) =>
        localStoreHasJWT ? (
          authed ? (
            <Component {...props} />
          ) : (
            <span>Loading...</span>
          )
        ) : (
          <Redirect
            to={{
              pathname: '/',
              state: { from: props.location.pathname },
            }}
          />
        )
      }
    />
  )
}
