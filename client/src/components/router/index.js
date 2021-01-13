import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import About from '../about'
import Menu from '../menu'
import Setup from '../setup'


const Router = ()  => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" render={() => <Menu/>}/>
      <Route path="/setup" render={() => <Setup/>}/>
      <Route path="about" render={() => <About/>}/>
    </Switch>
  </BrowserRouter>
)

export default Router