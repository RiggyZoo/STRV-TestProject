import React from 'react'
import { LoginPage as LoginPageLayout } from '../../containers/LoginPage'

const ErrorPage = () => {
  return <LoginPageLayout error={true} />
}

export { ErrorPage }
