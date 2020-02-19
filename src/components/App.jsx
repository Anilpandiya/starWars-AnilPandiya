import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import Login from "./Login";
import Dashboard from "./Dashboard";
import history from "../utils/history";

class App extends React.Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={Login}></Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/search" component={Dashboard}></Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
