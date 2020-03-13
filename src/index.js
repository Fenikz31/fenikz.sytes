import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './App'
import * as serviceWorker from './serviceWorker'
import { AuthProvider } from './auth'
import config from './config.json'
import history from './utils/history'

// A function that routes the user to the right place
// after login
const onRedirectCallback = appState => {
  history.push(
    appState && appState.targetUrl
      ? appState.targetUrl
      : window.location.pathname
  )
}

ReactDOM.render(
  <AuthProvider
    client_id={config.clientId}
    domain={config.domain}
    onRedirectCallback={onRedirectCallback}
    redirect_uri={window.location.origin}
  >
    <App />
  </AuthProvider>,
  document.getElementById('root')
)

serviceWorker.unregister()
