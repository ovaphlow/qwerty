import React from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'

import List from './List'

const Index = () => {
  return (
    <HashRouter>
      <Switch>
        <Route path="/美食/列表" component={List} />
      </Switch>
    </HashRouter>
  )
}

export default Index