import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App'
import '../src/styles/master.css'
import reportWebVitals from './reportWebVitals'
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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
