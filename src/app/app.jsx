import React from 'react'
import {
  Route,
  Switch,
} from 'react-router-dom'

import Header from './layout/header'
import Footer from './layout/footer'

import Home from './home/home'
import Error404 from './error404/error404'

function App(props) { // eslint-disable-line no-unused-vars
  return (
    <main role="application">
      <Header />

      <Switch>
        <Route
          path="/"
          exact
          component={Home}
        />
        <Route
          component={Error404}
        />
      </Switch>

      <Footer />
    </main>
  )
}

export default App
