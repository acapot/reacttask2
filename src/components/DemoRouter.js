import React from 'react'
import Home from "./pages/Home"
//import NotFound from "./NotFound"
import Person from "./pages/Person"
import Welcome from "./pages/Welcome"
import About from "./pages/About"
import PrimaryNav from "./pages/PrimaryNav"
import { BrowserRouter as Router, Switch, Route, useHistory, useParams } from "react-router-dom"
import { Container } from "react-bootstrap"
import CrudDemo from './pages/CrudDemo'
import ShowPersonDetails from './table/ShowPersonDetails'
import NotFound from './pages/NotFound'

function DemoRouter() {
  return (
  <>    
    <Router className="App">
      <Container>
        <PrimaryNav/>
        <Switch>          
          <Route path="/home" component={Home} />
          <Route exact path="/" component={Home}/>
          <Route path="/welcome" component={Welcome} />
          <Route path="/about" component={About} />
          <Route path="/person" component={Person} />
          <Route path="/crud" component={CrudDemo} />
          <Route path="/details/:id" component={ShowPersonDetails} />
          <Route component={NotFound} />       
        </Switch>
      </Container>
    </Router>
  </>
  );
}

export default DemoRouter;