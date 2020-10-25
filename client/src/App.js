import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import LandingPage from "./components/views/LandingPage/LandingPage"
import WritePage from "./components/views/WritePage/WritePage"

import './App.scss';

function App() {
  const style = {
    height: "100%",
    width: "100%"
}
  return (
    <Router>
      <div style={style}>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/write" component={WritePage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
