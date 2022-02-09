import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App'
import '../src/styles/master.css'
import 'sanitize.css'
import { UserManager } from './contexts/CurrentUser'

ReactDOM.render(
  <Router>
    <UserManager>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </UserManager>
  </Router>,
  document.getElementById('root'),
)
