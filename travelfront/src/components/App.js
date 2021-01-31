import React from "react"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Forms from "./forms"
import Button from "./Button"
import Home from "./Home"
import View from "./View"
import Search from "./Search" 
function App(){

  return(
    <Router>
    <Button />
    <Switch>
      <Route path="/Home" component={Home} />
      <Route path='/forms' component={Forms} />
      <Route path="/View" component={View}/>
      <Route path="/Search" component={Search}/>
    </Switch>
  </Router>
  )
}

export default App