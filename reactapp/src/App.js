import React from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'

import Home from './Home';
import FoodIndex from './food/Index'

const App = () => {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/美食" component={FoodIndex} />
      </Switch>
    </HashRouter>
  )
}

export default App