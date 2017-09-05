import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Hello from './hello'
import ResultsContainer from './ResultsContainer'

console.log('router included');

const Routes = () => (
    <Switch>
      <Route exact path='/' component={ResultsContainer}/>
      <Route path = 'character' component={Hello}/>
    </Switch>
);

export default Routes

/*
      <Route exact path='/' component={ResultsContainer}/>
*      <Route path = '/comic' component={Comic}/>
      <Route path = '/creator' component={Creator}/>
      */