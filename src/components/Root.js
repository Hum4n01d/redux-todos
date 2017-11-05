import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import App from './App'

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <div>
        <Route path='/:filter?' component={App}/>
      </div>
    </Router>
  </Provider>
)

export default Root