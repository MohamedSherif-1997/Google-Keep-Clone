import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import LoginContainer from "./container/LoginContainer";
import KeepNotesContainer from "./container/keepNotesContainer";
import history from "./history";

function App() {
  return (
    <div>
      <Router history={history}>
        <Switch>
          <Route exact path="/login" component={LoginContainer} />
          <Route exact path="/keep" component={KeepNotesContainer} />
          <Redirect to="/login" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
